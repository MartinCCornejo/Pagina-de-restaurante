const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
}