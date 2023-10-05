let nav = document.querySelector('nav'), menu = document.querySelector('.menu');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
menu.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}