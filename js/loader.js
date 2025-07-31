document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(el => {
    const file = `components/${el.getAttribute("data-include")}.html`;
    fetch(file)
      .then(res => res.text())
      .then(data => el.innerHTML = data)
      .catch(err => console.warn("Include error:", err));
  });
});