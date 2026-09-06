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
