// Arlyss West
// CS-463 Intro To Web Development
// Final Project: Personal Website
// "script.js": shared java script

/* thank u message */
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

/* fun fact button */
const facts = [
  "A lot of people don't consider serving to be a real job, but I make more money at my job than a lot of people with degrees make. However it is physically hard on your body, so I would like a job that is less physically demanding and still pays well at some point",
  "I am a transfer student and I switched majors. I started college as  biology major at university of oregon, and transfered to portland state as a computer science major",
  "I love cats. I have two cats. One is named cleo. The other is named midnight",
  "I won a silver and a gold award in the schooltastic art awards for paintings",
  "One of my goals is to become a software engineer as a career.",
];

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("factButton");
  const display = document.getElementById("factDisplay");

  button.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    display.textContent = randomFact;
  });
});
