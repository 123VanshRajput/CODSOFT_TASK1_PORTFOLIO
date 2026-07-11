export function initScrollEffects() {
  const progressBar = document.getElementById("progress");
  const toTopBtn = document.getElementById("to-top");
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
  };

  const onScroll = () => {
    updateProgress();

    let currentId = sections[0]?.id;
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) currentId = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });

    if (toTopBtn) {
      toTopBtn.classList.toggle("is-visible", window.scrollY > 500);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
