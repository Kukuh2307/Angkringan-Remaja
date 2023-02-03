const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#menu');

hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('slide');
});

// click di luar side bar untuk menghilangkan navbar
document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('slide');
        navbarNav.style.transition = "0.5s";
    }
});