export function initRevealAnimations() {
  const revealTargets = document.querySelectorAll(".section, .card, .skill-card, .info-card, .project-card");

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}
