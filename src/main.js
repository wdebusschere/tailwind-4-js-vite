import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    const menuToggleButtons = document.querySelectorAll("[data-toggle-menu]");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("mobile-menu-overlay");
    const body = document.body;

    // Toggle menu visibility
    const toggleMenu = () => {
        mobileMenu.classList.toggle("translate-x-0");
        mobileMenu.classList.toggle("translate-x-full");
        overlay.style.display = overlay.style.display === "block" ? "none" : "block";
        body.classList.toggle("menu-open");
    };

    // Event listeners for opening/closing menu
    menuToggleButtons.forEach(button => {
        button.addEventListener("click", toggleMenu);
    });

    // Close menu when clicking outside
    overlay.addEventListener("click", toggleMenu);
});