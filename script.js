const logo = document.getElementById("logo");
const intro = document.getElementById("intro");
const cornerLogo = document.getElementById("corner-logo");
const content = document.getElementById("content");

setTimeout(() => {
    // Change initials into symbols
    logo.textContent = ">>+";

    // Move to top-left
    logo.classList.add("animate");
}, 2000);

setTimeout(() => {
    // Show the permanent corner logo
    cornerLogo.style.opacity = "1";

    // Hide the moving version
    logo.style.opacity = "0";

    // Fade intro away
    intro.classList.add("fade-out");

    // Show main content
    content.classList.add("show");
}, 3400);