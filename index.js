function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Navigation menu
const menuButton = document.getElementById('header-menu'),
    navMenu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Page navigation
let currentHash;

window.addEventListener('hashchange', function() {
    const currentPage = document.getElementById(currentHash.slice(1));
    
    currentPage.classList.toggle('selected');

    const newPage = document.getElementById(window.location.hash.slice(1));

    newPage.classList.toggle('selected');

    currentHash = window.location.hash;

    document.title = `Renewable Revolution | ${capitalizeFirstLetter(currentHash.slice(1))}`;
  }, false);

if (window.location.hash === '') {
    window.location.hash = '#articles';
}

currentHash = window.location.hash;

document.getElementById(currentHash.slice(1)).classList.toggle('selected');

// Mobile changes
const mql = window.matchMedia('(max-width: 1000px)');

if (mql.matches) {
    navMenu.classList.add('hidden');

    Array.from(navMenu.getElementsByTagName('a')).forEach((element) =>
        element.addEventListener('click', () =>
            navMenu.classList.toggle('hidden')));
}
