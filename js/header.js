// 📁 js/header.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    header.classList.toggle("sticky", window.scrollY > 50);
  });
});
