const MenuCollapsible = document.getElementById("MenuNav");
const Menudisplay = document.getElementById("Menu");

let menuVisible = false;

MenuCollapsible.addEventListener("click", function() {
    if (!menuVisible) {
        Menudisplay.style.display = "block"; // Show the menu
    } else {
        Menudisplay.style.display = "none"; // Hide the menu
    }
    menuVisible = !menuVisible; // Toggle the state
});

const returnToTopButton = document.getElementById("returnToTopButton");

returnToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Use smooth scrolling animation
    });
});