const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of today.",
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. it's the life in the years that counts.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough for a life time.",
  "Many of life's failures are people who did not realize how to keep going.",
  "If you want to live a happy life, tie it to a goal, not to a pole."
];

const quoteEl = document.getElementById("quotes");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
});
