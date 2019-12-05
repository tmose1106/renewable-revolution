const menuButton = document.getElementById('header-menu'),
    navMenu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});