// //===================//NAVBAR_DESIGN//====================//

const toogleButton = document.getElementsByClassName('menu-bar');
const navLinks = document.getElementsByClassName('nav-menu');

toogleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})