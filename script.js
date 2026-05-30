const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const cvForm = document.querySelector("[data-cv-form]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
    }
  });
}

if (cvForm) {
  cvForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(cvForm);
    const cv = formData.get("cv");
    const cvName = cv instanceof File && cv.name ? cv.name : "No adjuntado";
    const message = [
      "Hola, quiero postular para trabajar en MARMACON.",
      `Nombre: ${formData.get("nombre") || ""}`,
      `Telefono: ${formData.get("telefono") || ""}`,
      `Area: ${formData.get("area") || ""}`,
      `Experiencia: ${formData.get("experiencia") || "0"} anos`,
      `CV: ${cvName}`,
      `Mensaje: ${formData.get("mensaje") || ""}`,
    ].join("\n");

    const note = cvForm.querySelector("[data-form-note]");
    if (note) {
      note.textContent = "Se abrirá WhatsApp con los datos de la postulación.";
    }

    window.open(`https://wa.me/593999035346?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}
