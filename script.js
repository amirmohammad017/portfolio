// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-up on scroll
const fadeUps = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
fadeUps.forEach((el) => observer.observe(el));

// Slide-in Side Menu
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

// Menu overlay
const menuOverlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
  menuOverlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
});

menuOverlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
});

// بستن منو با کلیک روی لینک‌ها
document.querySelectorAll(".side-menu-list a").forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});

// بستن با دکمه Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sideMenu.classList.contains("active")) {
    sideMenu.classList.remove("active");
  }
});

