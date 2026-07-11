export function initNavigation() {
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");
  const header = document.querySelector("header");
  const links = document.querySelectorAll(".nav-link");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  if (!navToggle || !navList) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navList.addEventListener("click", (event) => {
    if (event.target.matches(".nav-link")) {
      navList.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  const setActiveLink = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        links.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  };

  const toggleHeaderState = () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 20);
    }
  };

  window.addEventListener("scroll", () => {
    setActiveLink();
    toggleHeaderState();
  });

  setActiveLink();
  toggleHeaderState();
}
