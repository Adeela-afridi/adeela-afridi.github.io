const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navbarMenu = document.getElementById("navbarMenu");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (navbarMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
    }
  });
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => observer.observe(item));


const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light-mode", isLight);
    themeIcon.className = isLight ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to night mode" : "Switch to day mode"
    );
    themeToggle.title = isLight ? "Night mode" : "Day mode";
}

const savedTheme = localStorage.getItem("adeelaPortfolioTheme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode")
        ? "dark"
        : "light";

    localStorage.setItem("adeelaPortfolioTheme", nextTheme);
    applyTheme(nextTheme);
});
