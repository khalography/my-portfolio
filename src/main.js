import "./styles.css";

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

// The contact form composes an email; it does not submit to a backend.
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
    window.location.href = `mailto:qazeemibraheem@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
