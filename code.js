AOS.init();
//BARS MENU
let nav = document.querySelector('.nav');
let line1 = document.querySelector('.line1-bar');
let line2 = document.querySelector('.line2-bar');
let line3 = document.querySelector('.line3-bar');

document.querySelector('.bars-menu').addEventListener('click', ()=>{
    line1.classList.toggle('activeLine1-bar');
    line2.classList.toggle('activeLine2-bar');
    line3.classList.toggle('activeLine3-bar');
    nav.classList.toggle('nav-bar-show');
})