document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded");
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const backdrop = document.querySelector(".backdrop");
    const navLinks = document.querySelectorAll("nav ul li a");

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("show");
        backdrop.classList.toggle("show");
    });

    backdrop.addEventListener("click", function () {
        nav.classList.remove("show");
        backdrop.classList.remove("show");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("show");
            backdrop.classList.remove("show");
        });
    });
});
