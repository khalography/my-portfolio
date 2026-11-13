import "./styles.css";

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("#navigation");
const navigationLinks = navigation.querySelectorAll("a");
const desktopLayout = window.matchMedia("(min-width: 701px)");

function setMenuOpen(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  menuButton.textContent = open ? "×" : "☰";
  navigation.classList.toggle("open", open);
}

function updateActiveLink() {
  for (const link of navigationLinks) {
    if (window.location.hash && link.hash === window.location.hash) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

for (const link of navigationLinks) {
  link.addEventListener("click", () => setMenuOpen(false));
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

desktopLayout.addEventListener("change", () => setMenuOpen(false));
window.addEventListener("hashchange", updateActiveLink);
updateActiveLink();

document.querySelector("#year").textContent = String(new Date().getFullYear());
