AOS.init();
//BARS MENU
let nav = document.querySelector('.nav');
let bars = document.querySelector('.bars-menu');
let line1 = document.querySelector('.line1-bar');
let line2 = document.querySelector('.line2-bar');
let line3 = document.querySelector('.line3-bar');
let state = false;

const openBarsMenu = ()=>{
    line1.classList.add('activeLine1-bar');
    line2.classList.add('activeLine2-bar');
    line3.classList.add('activeLine3-bar');
    nav.classList.add('nav-bar-show');
    state = true;
}
const closeBarsMenu = ()=>{
    line1.classList.remove('activeLine1-bar');
    line2.classList.remove('activeLine2-bar');
    line3.classList.remove('activeLine3-bar');
    nav.classList.remove('nav-bar-show');
    state = false;
}

bars.addEventListener('click', ()=>{
    if(!state){
        openBarsMenu();
    }else{
        closeBarsMenu()
    }
})
document.addEventListener('click', (event)=> {
    let target = event.target;
    if (!target.closest('.header') && state) { // Comprobar si el clic fue fuera del menú
        closeBarsMenu()
    }
  });

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