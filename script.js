const menu = document.querySelector('.nav-menu');
const closeButton = document.querySelector('.close-button');
const menuButton = document.querySelector('.menu-button');
console.log(menu, closeButton);

function closeMenu() {
    menu.classList.add('nav-menu_hidden');
    closeButton.classList.add('close-button_hidden');
    menuButton.classList.remove('close-button_hidden');
}

function openMenu() {
    menu.classList.remove('nav-menu_hidden');
    closeButton.classList.remove('close-button_hidden');
    menuButton.classList.add('close-button_hidden');
}
