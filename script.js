document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Carousel auto-scroll
  const carousel = document.querySelector(".carousel");
  let index = 0;
  setInterval(() => {
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);

  // Contact form alert
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("Thanks for your message!");
    form.reset();
  });
});
