
const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active'); // toggles ☰ / ✖
    nav.classList.toggle('open'); // shows/hides nav links
});