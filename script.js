$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
});

var b1 = document.querySelectorAll('.fa-play-circle')[0];
var m1 = new Audio('m1.mp3');
b1.addEventListener('click', 
function playMusic(){
  if(m1.paused){
    m1.play();
  }
  else{
    m1.pause();
  }
})

var b2 = document.querySelectorAll('.fa-play-circle')[1];
var m2 = new Audio('m2.mp3');
b2.addEventListener('click',
function playMusic(){
  if(m2.paused){
    m2.play();
  }
  else{
    m2.pause();
  }
})

var b3 = document.querySelectorAll('.fa-play-circle')[2];
var m3 = new Audio('m3.mp3');
b3.addEventListener('click',
function playMusic(){
  if(m3.paused){
    m3.play();
  }
  else{
    m3.pause();
  }
})

var b4 = document.querySelectorAll('.fa-play-circle')[3];
var m4 = new Audio('m4.mp3');
b4.addEventListener('click',
function playMusic(){
  if(m4.paused){
    m4.play();
  }
  else{
    m4.pause();
  }
})

var b5 = document.querySelectorAll('.fa-play-circle')[4];
var m5 = new Audio('m5.mp3');
b5.addEventListener('click',
function playMusic(){
  if(m5.paused){
    m5.play();
  }
  else{
    m5.pause();
  }
})

var b6 = document.querySelectorAll('.fa-play-circle')[5];
var m6 = new Audio('m6.mp3');
b6.addEventListener('click',
function playMusic(){
  if(m6.paused){
    m6.play();
  }
  else{
    m6.pause();
  }
})
