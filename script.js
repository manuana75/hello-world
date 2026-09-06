const toggle = document.getElementById("theme-toggle");
const STORAGE_KEY = "theme";

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const saved = localStorage.getItem(STORAGE_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  const next = isDark ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});

const CONTACT_EMAIL = "manuelbarrero1975@gmail.com";
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = `Clases de español — contacto de ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
