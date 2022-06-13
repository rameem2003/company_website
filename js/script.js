const nav = document.querySelector("nav");
const tog = document.getElementById("tog");


tog.addEventListener("click", () => {
    nav.classList.toggle("active");
})