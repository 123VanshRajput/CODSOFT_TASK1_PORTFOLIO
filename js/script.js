import { initNavigation } from "./navigation.js";
import { initTypingEffect } from "./typing.js";
import { initRevealAnimations } from "./animations.js";
import { initScrollEffects } from "./scroll.js";
import { initTheme } from "./theme.js";
import { initContactForm } from "./contact.js";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initTypingEffect();
  initRevealAnimations();
  initScrollEffects();
  initContactForm();
});
