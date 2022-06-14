const nav = document.querySelector("nav");
const tog = document.getElementById("tog");

const header = document.querySelector("header");



tog.addEventListener("click", () => {
    nav.classList.toggle("active");
    tog.classList.toggle("fa-times");
})


window.onscroll = () => {
    nav.classList.remove("active");

    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
        header.classList.add("scroll");
    } 
    else{
        header.classList.remove("scroll");
    }
}
