export function initTypingEffect() {
  const roleEl = document.getElementById("typed-role");
  const roles = [
    "Full Stack Developer",
    "Java Enthusiast",
    "Cyber Security Learner",
    "Problem Solver"
  ];

  if (!roleEl) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    roleEl.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeTick = () => {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    roleEl.textContent = current.slice(0, charIndex);

    let delay = deleting ? 40 : 70;

    if (!deleting && charIndex === current.length) {
      delay = 1500;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }

    setTimeout(typeTick, delay);
  };

  setTimeout(typeTick, 800);
}
