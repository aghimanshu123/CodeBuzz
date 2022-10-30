function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
});

var pp = document.querySelector('.pp');
pp.addEventListener('click', function(){
  pp.classList.toggle("fa-play-circle");
  pp.classList.toggle("fa-pause-circle");
})

var b1 = document.querySelector('.b1');
var m1 = new Audio('m1.mp3');
b1.addEventListener('click', 
function playMusic(){
  if(m1.paused){
    m1.play();
    b1.classList.remove("fa-play-circle");
    b1.classList.add("fa-pause-circle");
  }
  else{
    m1.pause();
    b1.classList.add("fa-play-circle");
    b1.classList.remove("fa-pause-circle");
  }
})

var b2 = document.querySelector('.b2');
var m2 = new Audio('m2.mp3');
b2.addEventListener('click',
function playMusic(){
  if(m2.paused){
    m2.play();
    b2.classList.remove("fa-play-circle");
    b2.classList.add("fa-pause-circle");
  }
  else{
    m2.pause();
    b2.classList.add("fa-play-circle");
    b2.classList.remove("fa-pause-circle");
  }
})

var b3 = document.querySelector('.b3');
var m3 = new Audio('m3.mp3');
b3.addEventListener('click',
function playMusic(){
  if(m3.paused){
    m3.play();
    b3.classList.remove("fa-play-circle");
    b3.classList.add("fa-pause-circle");
  }
  else{
    m3.pause();
    b3.classList.add("fa-play-circle");
    b3.classList.remove("fa-pause-circle");
  }
})

var b4 = document.querySelector('.b4');
var m4 = new Audio('m4.mp3');
b4.addEventListener('click',
function playMusic(){
  if(m4.paused){
    m4.play();
    b4.classList.remove("fa-play-circle");
    b4.classList.add("fa-pause-circle");
  }
  else{
    m4.pause();
    b4.classList.add("fa-play-circle");
    b4.classList.remove("fa-pause-circle");
  }
})

var b5 = document.querySelector('.b5');
var m5 = new Audio('m5.mp3');
b5.addEventListener('click',
function playMusic(){
  if(m5.paused){
    m5.play();
    b5.classList.remove("fa-play-circle");
    b5.classList.add("fa-pause-circle");
  }
  else{
    m5.pause();
    b5.classList.add("fa-play-circle");
    b5.classList.remove("fa-pause-circle");
  }
})

var b6 = document.querySelector('.b6');
var m6 = new Audio('m6.mp3');
b6.addEventListener('click',
function playMusic(){
  if(m6.paused){
    m6.play();
    b6.classList.remove("fa-play-circle");
    b6.classList.add("fa-pause-circle");
  }
  else{
    m6.pause();
    b6.classList.add("fa-play-circle");
    b6.classList.remove("fa-pause-circle");
  }
})
