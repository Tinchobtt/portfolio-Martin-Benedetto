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

//CONTACT
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');

inputName.addEventListener('focus', ()=>{
    inputName.previousElementSibling.classList.add('label-up')
})
inputEmail.addEventListener('focus', ()=>{
    inputEmail.previousElementSibling.classList.add('label-up')
})
inputMessage.addEventListener('focus', ()=>{
    inputMessage.previousElementSibling.classList.add('label-up')
})
inputName.addEventListener('blur', ()=>{
    if(inputName.value === ''){
        inputName.previousElementSibling.classList.remove('label-up')
    }
})
inputEmail.addEventListener('blur', ()=>{
    if(inputEmail.value === ''){
        inputEmail.previousElementSibling.classList.remove('label-up')
    }
})
inputMessage.addEventListener('blur', ()=>{
    if(inputMessage.value === ''){
        inputMessage.previousElementSibling.classList.remove('label-up')
    }
})