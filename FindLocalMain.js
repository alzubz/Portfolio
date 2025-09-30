document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slideshow .slide');
  const dots = document.querySelectorAll('.dots .dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 7500);
});