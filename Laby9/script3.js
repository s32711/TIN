const hamburgerBtn = document.getElementById('hamburger-przycisk');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});