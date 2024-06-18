// recipe-page.js
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu-icon');
    const sideMenu = document.getElementById('side-menu');
    const sideMenuLinks = document.querySelectorAll('.side-navbar a');

    // Toggle menu visibility
    menuIcon.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });
    
    // Close menu when clicking on a link
    sideMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            sideMenu.classList.remove('open');
        }
    });
});
