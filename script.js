// Arlyss West
// CS-463 Intro To Web Development
// Final Project: Personal Website
// "script.js": shared java script

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("formStatus").textContent =
        "Thank you! Message sent.";
      form.reset();
    });
  }
});
