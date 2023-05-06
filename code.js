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

let box_1 = document.querySelector('.box-1');
let box_2 = document.querySelector('.box-2');
let box_3 = document.querySelector('.box-3');
let box_4 = document.querySelector('.box-4');
let box_5 = document.querySelector('.box-5');
let box_6 = document.querySelector('.box-6');
let box_7 = document.querySelector('.box-7');
let box_8 = document.querySelector('.box-8');
let box_9 = document.querySelector('.box-9');
let flip = document.querySelector('.flip');

document.querySelector('.box-container').addEventListener('click', ()=>{
    setTimeout(function(){
      box_1.classList.toggle('activeBox-1');
    },700)
    setTimeout(function(){
      box_2.classList.toggle('activeBox-2');
    },300)
    setTimeout(function(){
      box_3.classList.toggle('activeBox-3');
    },800)
    setTimeout(function(){
      box_4.classList.toggle('activeBox-4');
    },200)
    if(box_5.classList.contains('activeBox-5')){
      setTimeout(function(){
        box_5.classList.toggle('activeBox-5');
        flip.style.opacity = 1;
      },1500)
    }else{
      setTimeout(function(){
        box_5.classList.toggle('activeBox-5');
        flip.style.opacity = 0;
      },1100)
    }
    setTimeout(function(){
      box_6.classList.toggle('activeBox-6');
    },400)
    setTimeout(function(){
      box_7.classList.toggle('activeBox-7');
    },600)
    setTimeout(function(){
      box_8.classList.toggle('activeBox-8');
    },500)
    setTimeout(function(){
      box_9.classList.toggle('activeBox-9');
    },900)
});