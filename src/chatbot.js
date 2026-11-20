import "./chatbot.css";

// Chatbot for adekunle.space.
// Gemini is the primary brain: the bot sends the message to the Vercel
// serverless function at /api/chat, which calls Gemini with a system prompt
// that carries the knowledge base. The Gemini API key lives in Vercel env
// vars and never appears in client-side code.
// Keyword matching is the fallback: if the Gemini call fails for any reason
// (no key set, API down, network error), the bot answers from the local
// knowledge base below so the site never breaks.

const WHATSAPP_NUMBER = "2348153137879";
const EMAIL = "info@adekunle.space";

const QUICK_REPLIES = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does it take?",
  "I want to start a project",
];

const INTENTS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
    answer:
      "Hi, I'm Adekunle. I build websites, AI agents and automations for small businesses. Ask me about my services, pricing or past work, or tell me about your project and we can get started.",
  },
  {
    id: "services",
    keywords: ["service", "services", "what do you do", "offer", "offerings", "what can you build"],
    answer:
      "I build websites, AI agents and automations. The main things I do are website development, AI automation, AI agents, Web3 projects and tech consulting. Which one are you interested in? I'll explain it.",
  },
  {
    id: "website",
    keywords: ["website", "web site", "web design", "landing page", "webpage", "site"],
    answer:
      "I build fast, clean websites for businesses: company sites, landing pages and portfolios. Every site I build loads quickly, works well on phones and makes it easy for customers to contact the business. You can see recent examples on the Work page, including FST Engineering and Valuegain Global Services.",
  },
  {
    id: "ai-agent",
    keywords: ["agent", "ai agent", "chatbot", "bot", "assistant", "chat bot"],
    answer:
      "I build AI agents that answer customer questions, take orders and handle routine enquiries, so you don't have to reply to every message by hand. An agent can work on WhatsApp or on a website, and it hands over to a human when it can't help. This chat is a small example of one.",
  },
  {
    id: "automation",
    keywords: ["automation", "automate", "workflow", "workflows", "automated", "save time"],
    answer:
      "I build automations that remove repeat work: lead capture that alerts you on WhatsApp, invoice and payment reminders, and content scheduling. The goal is always the same, save you time and money and give your customers faster service. Tell me what repeat work you want to remove and I'll point you to the right option.",
  },
  {
    id: "web3",
    keywords: ["web3", "crypto", "nft", "blockchain", "onchain", "token", "wallet"],
    answer:
      "I work on Web3 projects too, including websites and tools for crypto and NFT communities. One example is Onchain Mutineers, on the Work page. If your project involves a wallet, a mint or a community, mention it when you start a project and I'll tell you if it's a fit.",
  },
  {
    id: "consulting",
    keywords: ["consult", "consulting", "advice", "advise", "consultant", "help me decide"],
    answer:
      "I offer tech consulting for businesses that aren't sure what to build yet. It usually starts with a short chat about your business and the problem, then I'll give you a plain recommendation on what's worth building and what isn't. We can start that chat right here, or on WhatsApp.",
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "how much", "budget", "quote", "charge", "fee", "rates"],
    answer:
      "There's no fixed price list, because every project is different. After a short chat about what you need, I'll give you a clear quote before any work starts, so there are no surprises. If you tell me the service and a rough budget, I'll keep that in mind when we talk.",
  },
  {
    id: "timeline",
    keywords: ["how long", "timeline", "when", "delivery", "turnaround", "how fast", "ready"],
    answer:
      "It depends on the size of the project. A simple website is usually ready quickly, and a larger build with agents or automations takes longer. I'll confirm a timeline with you before starting, so you know when to expect it.",
  },
  {
    id: "process",
    keywords: ["process", "how does it work", "steps", "how do i start", "how to start", "what happens"],
    answer:
      "It works in four steps. First, a short chat about your business and what you need. Second, a clear quote and timeline from me. Third, I build it and you review it. Fourth, it goes live and I hand it over. You can start step one right here, just say you want to start a project.",
  },
  {
    id: "work",
    keywords: ["work", "project", "projects", "portfolio", "example", "examples", "show me"],
    answer:
      "Some of my recent work includes FST Engineering, a website for a water tank company in Lagos, Circuit Breakers, Valuegain Global Services and Onchain Mutineers. You can see them all on the Work page. Tell me which type of project is closest to yours and I'll point you to the most relevant one.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "whatsapp", "reach", "call you", "talk to you"],
    answer:
      "You can reach me by email at info@adekunle.space, or on WhatsApp at +234 815 313 7879. I'm based in Lagos, Nigeria. If you'd like, I can take your details and open WhatsApp with a message ready to send.",
  },
  {
    id: "booking",
    keywords: ["book", "start", "hire", "get started", "i want", "begin", "sign up", "work with you", "need a website", "need an agent", "need automation"],
    answer: null,
  },
  {
    id: "about",
    keywords: ["about", "who are you", "who is adekunle", "yourself", "background", "experience"],
    answer:
      "I'm an independent AI developer based in Lagos, Nigeria. I build websites, AI agents and automations for small businesses, and I've done this for over 25 clients. I also work on Web3 and community projects. You can read more about me on the About page.",
  },
  {
    id: "location",
    keywords: ["where", "lagos", "nigeria", "location", "based", "country"],
    answer:
      "I'm based in Lagos, Nigeria, and I work with clients remotely. You can reach me by email or WhatsApp from anywhere.",
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "great", "good", "nice", "helpful"],
    answer:
      "You're welcome. If you have another question, ask away. If you're ready, I can help you start a project.",
  },
];

const FALLBACK =
  "I'm not sure I caught that. I can help with services, pricing, timelines, past work, or starting a project. Try one of the suggestions below, or ask it in different words.";

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function normalise(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchIntent(text) {
  const clean = normalise(text);
  if (!clean) return null;
  let best = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    let score = 0;
    for (const keyword of intent.keywords) {
      if (clean.includes(keyword)) score += keyword.split(" ").length + 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  return bestScore > 0 ? best : null;
}

function buildWhatsAppLink(name, service, message) {
  const lines = [
    `Hello Adekunle, my name is ${name}.`,
    `I'm interested in: ${service}.`,
    message ? `Details: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

function buildMailtoLink(name, service, message) {
  const subject = `Project enquiry: ${service}`;
  const body = [`Name: ${name}`, `Service: ${service}`, "", message || ""].join("\n");
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Ask Gemini through the Vercel serverless function. Returns
// { reply, action } or null when the call fails for any reason, in which
// case the caller falls back to keyword matching.
async function askGemini(message, history) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history: history.slice(-10) }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (typeof data.reply !== "string" || !data.reply.trim()) return null;
    return {
      reply: data.reply.trim(),
      action: data.action === "start_booking" ? "start_booking" : "none",
    };
  } catch {
    return null;
  }
}

export function initChatbot() {
  const existing = document.querySelector(".chatbot");
  if (existing) return;

  const root = document.createElement("div");
  root.className = "chatbot";
  root.innerHTML = `
    <div class="chatbot-panel" hidden>
      <div class="chatbot-header">
        <span class="chatbot-avatar" aria-hidden="true">A</span>
        <span class="chatbot-header-text">
          <strong>Adekunle</strong>
          <span>AI Developer, Lagos</span>
        </span>
        <span class="chatbot-online" title="Online">Online</span>
        <button type="button" class="chatbot-close" aria-label="Close chat">Close</button>
      </div>
      <div class="chatbot-messages" aria-live="polite"></div>
      <div class="chatbot-chips"></div>
      <form class="chatbot-form">
        <label class="chatbot-label" for="chatbot-input">Message</label>
        <input id="chatbot-input" class="chatbot-input" type="text" placeholder="Type your message" autocomplete="off" />
        <button type="submit" class="chatbot-send">Send</button>
      </form>
    </div>
    <button type="button" class="chatbot-toggle" aria-expanded="false" aria-label="Open chat with Adekunle">
      <span class="chatbot-toggle-text">Chat</span>
    </button>
  `;
  document.body.appendChild(root);

  const panel = root.querySelector(".chatbot-panel");
  const toggle = root.querySelector(".chatbot-toggle");
  const closeButton = root.querySelector(".chatbot-close");
  const messages = root.querySelector(".chatbot-messages");
  const chips = root.querySelector(".chatbot-chips");
  const form = root.querySelector(".chatbot-form");
  const input = root.querySelector(".chatbot-input");

  // Booking flow state. null when idle, otherwise { step, name, service }.
  let booking = null;

  // Conversation history sent to Gemini for context. Kept short.
  const history = [];

  function recordTurn(role, text) {
    history.push({ role, text });
    if (history.length > 20) history.splice(0, history.length - 20);
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  function addMessage(text, who) {
    const bubble = document.createElement("div");
    bubble.className = `chatbot-message chatbot-message-${who}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    scrollToBottom();
    return bubble;
  }

  function addLinkMessage(text, label, href) {
    const bubble = document.createElement("div");
    bubble.className = "chatbot-message chatbot-message-bot";
    const span = document.createElement("span");
    span.textContent = text;
    const link = document.createElement("a");
    link.className = "chatbot-link";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = label;
    bubble.append(span, document.createElement("br"), link);
    messages.appendChild(bubble);
    scrollToBottom();
  }

  function showTyping() {
    const typing = document.createElement("div");
    typing.className = "chatbot-message chatbot-message-bot chatbot-typing";
    typing.setAttribute("aria-hidden", "true");
    typing.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(typing);
    scrollToBottom();
    return typing;
  }

  function setChips(list) {
    chips.innerHTML = "";
    for (const label of list) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chatbot-chip";
      button.textContent = label;
      button.addEventListener("click", () => handleUserText(label));
      chips.appendChild(button);
    }
  }

  function botReply(text, replyChips = QUICK_REPLIES) {
    const typing = showTyping();
    const delay = prefersReducedMotion() ? 0 : 500;
    window.setTimeout(() => {
      typing.remove();
      addMessage(text, "bot");
      setChips(replyChips);
    }, delay);
  }

  function startBooking() {
    booking = { step: "name", name: "", service: "" };
    botReply(
      "Great, let's do it. What's your name?",
      [],
    );
  }

  function finishBooking(message) {
    const { name, service } = booking;
    booking = null;
    const whatsapp = buildWhatsAppLink(name, service, message);
    const mailto = buildMailtoLink(name, service, message);
    const typing = showTyping();
    const delay = prefersReducedMotion() ? 0 : 500;
    window.setTimeout(() => {
      typing.remove();
      addMessage(
        `Thanks ${name}. I've got it noted: ${service}${message ? `, ${message}` : ""}. Continue on WhatsApp and I'll reply there.`,
        "bot",
      );
      addLinkMessage("Continue the conversation where I reply fastest.", "Continue on WhatsApp", whatsapp);
      const emailBubble = document.createElement("div");
      emailBubble.className = "chatbot-message chatbot-message-bot";
      const emailLink = document.createElement("a");
      emailLink.className = "chatbot-link";
      emailLink.href = mailto;
      emailLink.textContent = "Or send it by email instead";
      emailBubble.appendChild(emailLink);
      messages.appendChild(emailBubble);
      scrollToBottom();
      setChips(QUICK_REPLIES);
    }, delay);
  }

  function handleBookingAnswer(text) {
    if (booking.step === "name") {
      booking.name = text.trim();
      booking.step = "service";
      botReply(
        `Nice to meet you, ${booking.name}. What do you need? Pick one below or type your own.`,
        ["Website development", "AI automation", "AI agent", "Web3 project", "Tech consulting", "Not sure yet"],
      );
      return;
    }
    if (booking.step === "service") {
      booking.service = text.trim();
      booking.step = "message";
      botReply("Got it. In one sentence, what should it do for your business? (You can type 'skip' if you prefer.)", []);
      return;
    }
    const message = /^skip$/i.test(text.trim()) ? "" : text.trim();
    finishBooking(message);
  }

  async function handleUserText(text) {
    const clean = text.trim();
    if (!clean) return;
    addMessage(clean, "user");
    recordTurn("user", clean);
    setChips([]);
    if (booking) {
      handleBookingAnswer(clean);
      return;
    }
    // Gemini first: it understands intent, not just keywords. If the call
    // fails for any reason, fall back to the local keyword answers.
    const result = await askGemini(clean, history);
    if (result) {
      recordTurn("bot", result.reply);
      if (result.action === "start_booking") {
        botReply(result.reply, []);
        startBooking();
        return;
      }
      botReply(result.reply);
      return;
    }
    const intent = matchIntent(clean);
    if (intent && intent.id === "booking") {
      startBooking();
      return;
    }
    if (intent && intent.answer) {
      recordTurn("bot", intent.answer);
      botReply(intent.answer);
      return;
    }
    recordTurn("bot", FALLBACK);
    botReply(FALLBACK);
  }

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close chat with Adekunle" : "Open chat with Adekunle");
    root.classList.toggle("is-open", open);
    if (open) {
      if (!messages.hasChildNodes()) {
        addMessage("Hi, I'm Adekunle. Ask me about my services, pricing or past work, or tell me about your project and we can get started.", "bot");
        setChips(QUICK_REPLIES);
      }
      input.focus();
    }
  }

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  closeButton.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) setOpen(false);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    handleUserText(value);
    input.focus();
  });
}

initChatbot();
