import "./styles.css";
import "./chatbot.js";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const backgroundRegions = document.querySelectorAll("main, .site-footer");
const desktopLayout = window.matchMedia("(min-width: 810px)");

function setMenuOpen(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  menuButton.textContent = open ? "Close" : "Menu";
  navigation.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  for (const region of backgroundRegions) region.inert = open;
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

for (const link of navigation.querySelectorAll("a")) {
  link.addEventListener("click", () => setMenuOpen(false));
}

desktopLayout.addEventListener("change", () => setMenuOpen(false));

document.addEventListener("keydown", (event) => {
  if (menuButton.getAttribute("aria-expanded") !== "true") return;
  if (event.key === "Escape") {
    setMenuOpen(false);
    menuButton.focus();
    return;
  }
  if (event.key !== "Tab") return;
  const lastLink = navigation.querySelector(".menu-email");
  if (event.shiftKey && document.activeElement === menuButton) {
    event.preventDefault();
    lastLink.focus();
  } else if (!event.shiftKey && document.activeElement === lastLink) {
    event.preventDefault();
    menuButton.focus();
  }
});

// Gmail opens a draft for the visitor to review and send; no delivery is implied.
for (const form of document.querySelectorAll(".project-form")) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const subject = `Project enquiry: ${fields.get("service")}`;
    const body = [
      `Name: ${fields.get("name")}`,
      `Email: ${fields.get("email")}`,
      `Company: ${fields.get("company") || "—"}`,
      `Project: ${fields.get("service")}`,
      `Budget: ${fields.get("budget") || "Not specified"}`,
      "",
      fields.get("message"),
    ].join("\n");
    const compose = new URL("https://mail.google.com/mail/");
    compose.search = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "info@adekunle.space",
      su: subject,
      body,
    }).toString();
    window.location.assign(compose.href);
  });
}

// Keep cards visible without JavaScript or when reduced motion is requested.
const projectCards = document.querySelectorAll(".project-grid .project");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let projectObserver;

function configureProjectMotion() {
  projectObserver?.disconnect();
  for (const card of projectCards) {
    card.classList.remove("project-reveal", "is-visible");
  }
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  projectObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      }
    },
    { threshold: 0, rootMargin: "0px 0px -24px 0px" },
  );
  for (const card of projectCards) {
    card.classList.add("project-reveal");
    projectObserver.observe(card);
  }
}

configureProjectMotion();
reducedMotion.addEventListener("change", configureProjectMotion);
