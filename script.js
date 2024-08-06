document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded");
    const hamburger = document.querySelector(".hamburger");
    const headerContainer = document.querySelector(".header-container");
    const navMenu = document.querySelector("nav");
    const backdrop = document.querySelector(".backdrop");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        backdrop.classList.toggle("show");
    });

    backdrop.addEventListener("click", function () {
        navMenu.classList.remove("show");
        backdrop.classList.remove("show");
    });
});
