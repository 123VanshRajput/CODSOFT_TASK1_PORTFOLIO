export function initTheme() {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  const safeGet = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const safeSet = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore storage issues
    }
  };

  const storedTheme = safeGet("theme");
  if (storedTheme) {
    root.setAttribute("data-theme", storedTheme);
  }

  const applyButtonState = () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
  };

  applyButtonState();

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    if (nextTheme === "dark") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "light");
    }

    safeSet("theme", nextTheme);
    applyButtonState();
  });
}
