export function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = "Message ready to send — connect a backend or form service to deliver it.";
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 4000);
    form.reset();
  });
}
