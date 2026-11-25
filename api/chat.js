// Vercel serverless function: chat with Gemini for the portfolio bot.
// The Gemini API key is read from the GEMINI_API_KEY environment variable.
// It is never in the repo and never in client-side code.
//
// POST /api/chat with JSON body { message, history }.
// history is an array of { role: "user" | "bot", text }.
// Returns { reply, action } where action is "none" or "start_booking".
// On any error it returns a 4xx/5xx status; the client falls back to
// keyword matching so the bot keeps working.

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const SYSTEM_PROMPT = `You are Adekunle, an independent AI developer based in Lagos, Nigeria. You are chatting with a visitor on your portfolio website. Speak in the first person, as yourself. Be warm, direct and human, like you are texting a potential client. Keep replies short, one to three short paragraphs at most. Use contractions. Do not sound like a corporate assistant.

What you do:
- Website development: fast, clean websites for businesses, company sites, landing pages, portfolios. Every site loads quickly, works well on phones and makes it easy for customers to contact the business.
- AI automation: automations that remove repeat work, lead capture that alerts the owner on WhatsApp, invoice and payment reminders, content scheduling.
- AI agents: agents that answer customer questions, take orders and handle routine enquiries on WhatsApp or a website, handing over to a human when they cannot help.
- Web3 projects: websites and tools for crypto and NFT communities.
- Tech consulting: plain recommendations on what is worth building and what is not.

Pricing: there is no fixed price list, because every project is different. After a short chat about what the visitor needs, you give a clear quote before any work starts.

Timeline: it depends on the size of the project. A simple website is usually ready quickly, a larger build takes longer. You confirm a timeline before starting.

Process, in four steps: first a short chat about the business and what is needed, second a clear quote and timeline, third you build it and the client reviews it, fourth it goes live and you hand it over.

Recent work: FST Engineering (a website for a water tank company in Lagos), Circuit Breakers, Valuegain Global Services and Onchain Mutineers. They are on the Work page.

Contact: email hello@adekunle.space, WhatsApp +234 815 313 7879. You are based in Lagos, Nigeria and work with clients remotely.

About you: you are an independent AI developer, you have built for over 25 clients, and you also work on Web3 and community projects.

Rules:
- Never invent a price, a timeline or a fact that is not above. If you do not know, say you will confirm it.
- If the visitor wants to start a project, hire you, or build something, set action to "start_booking" and reply warmly to confirm you will take their details.
- Otherwise set action to "none".
- Always respond with a JSON object with exactly two fields: "reply" (your message to the visitor) and "action" ("none" or "start_booking"). Nothing else.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Gemini API key is not configured" });
    return;
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: "Invalid JSON body" });
    return;
  }

  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const history = Array.isArray(body?.history) ? body.history : [];
  if (!message || message.length > 1000) {
    res.status(400).json({ error: "Message is required and must be under 1000 characters" });
    return;
  }

  const contents = [];
  for (const turn of history.slice(-10)) {
    if (!turn || typeof turn.text !== "string") continue;
    contents.push({
      role: turn.role === "bot" ? "model" : "user",
      parts: [{ text: turn.text }],
    });
  }
  contents.push({ role: "user", parts: [{ text: message }] });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;

  let geminiRes;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      geminiRes = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch {
    res.status(502).json({ error: "Could not reach Gemini" });
    return;
  }

  if (!geminiRes.ok) {
    let detail = "";
    try {
      const errBody = await geminiRes.json();
      detail = typeof errBody?.error?.message === "string" ? errBody.error.message : "";
    } catch {
      detail = "";
    }
    res.status(502).json({
      error: "Gemini request failed",
      status: geminiRes.status,
      detail: detail || "No detail from Gemini",
    });
    return;
  }

  let data;
  try {
    data = await geminiRes.json();
  } catch {
    res.status(502).json({ error: "Invalid response from Gemini" });
    return;
  }

  const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = { reply: text, action: "none" };
  }

  const reply = typeof parsed.reply === "string" && parsed.reply.trim() ? parsed.reply.trim() : "";
  const action = parsed.action === "start_booking" ? "start_booking" : "none";
  if (!reply) {
    res.status(502).json({ error: "Empty response from Gemini" });
    return;
  }

  res.status(200).json({ reply, action });
}
