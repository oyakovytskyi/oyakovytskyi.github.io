document.addEventListener("DOMContentLoaded", () => {
  const quotes = document.querySelectorAll(".testimonials__quote");
  const prevBtn = document.querySelector(".testimonials__btn.prev");
  const nextBtn = document.querySelector(".testimonials__btn.next");
  let currentIndex = 0;

  function showQuote(index) {
    quotes.forEach((quote, i) => {
      quote.classList.toggle("active", i === index);
    });

    document.querySelectorAll(".current-slide").forEach((el, i) => {
      el.textContent = (index + 1).toString().padStart(2, "0");
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
  });

  showQuote(currentIndex);
});
