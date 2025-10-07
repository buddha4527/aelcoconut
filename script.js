// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => nav.classList.toggle('active'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
  });
}

// Hero slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(idx) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
setInterval(nextSlide, 4200);

// Testimonials carousel
const testimonials = document.querySelectorAll('.testimonial');
let testiIndex = 0;
function showTestimonial(idx) {
  testimonials.forEach((testi, i) => testi.classList.toggle('active', i === idx));
}
document.getElementById('nextTestimonial').onclick = () => {
  testiIndex = (testiIndex + 1) % testimonials.length;
  showTestimonial(testiIndex);
};
document.getElementById('prevTestimonial').onclick = () => {
  testiIndex = (testiIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testiIndex);
};
// Optionally auto-cycle testimonials every 8s:
setInterval(() => {
  testiIndex = (testiIndex + 1) % testimonials.length;
  showTestimonial(testiIndex);
}, 8000);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Fade in hero content on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-content').style.opacity = 1;
  document.querySelector('.hero-content').style.transform = 'none';
});
