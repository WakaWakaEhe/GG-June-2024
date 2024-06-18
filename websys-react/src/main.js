window.onload = function() { 
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    menu.onclick = () => {
        menu.classList.toggle('bx-x'); // Toggle the icon class (optional)
        navbar.classList.toggle('active'); // Toggle the navbar's visibility
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x'); // Ensure the icon resets on scroll (optional)
        navbar.classList.remove('active'); // Hide the navbar on scroll
    };
};
