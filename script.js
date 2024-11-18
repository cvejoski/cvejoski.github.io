document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Carousel functionality
  const carousel = document.querySelector(".carousel");
  let index = 0;
  setInterval(() => {
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);

  // Form validation
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("Thank you for your message!");
    form.reset();
  });

  // Reveal sections on scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  });
  sections.forEach(section => observer.observe(section));
});
