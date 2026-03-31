// Simple button interaction
document.querySelector("button").addEventListener("click", () => {
    alert("Redirecting to courses...");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50 ? "#000" : "#002147";
});
