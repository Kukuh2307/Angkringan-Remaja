const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#menu');

hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('slide');
});

// ketika user mengeklik diluar icon navbar(tablet,mobile) maka hilangkan navbar samping
document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('slide');
        navbarNav.style.transition = "0.5s";
    }
});