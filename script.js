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

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('music/m1.mp3');
let masterPlay = document.getElementById('mainPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let playingSong = document.getElementById('playingSong');
let songsItems = Array.from(document.getElementsByClassName('SongItem'));

let songs = [
  {songName: "S1", filePath: "music/m1.mp3", coverPath: "images/covers/1.jpg"},
  {songName: "S2", filePath: "music/m2.mp3", coverPath: "images/covers/2.jpg"},
  {songName: "S3", filePath: "music/m3.mp3", coverPath: "images/covers/3.jpg"},
  {songName: "S4", filePath: "music/m4.mp3", coverPath: "images/covers/4.jpg"},
  {songName: "S5", filePath: "music/m5.mp3", coverPath: "images/covers/5.jpg"},
  {songName: "S6", filePath: "music/m6.mp3", coverPath: "images/covers/6.jpg"}
]

songsItems.forEach((element)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("span")[0].innerText = songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
mainPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    mainPlay.classList.remove('fa-pause-circle');
    mainPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
  }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
  //Update seekbar
  progress = parseInt((audioElement.currentTime/audioElement/duration)* 100);
  progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
  audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src='music/$(songIndex+1).mp3';
    playingSong.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>5){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
  audioElement.src='music/$(songIndex+1).mp3';
  playingSong.innerText= songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  mainPlay.classList.remove('fa-play-circle');
  mainPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
  audioElement.src='music/$(songIndex+1).mp3';
  playingSong.innerText= songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  mainPlay.classList.remove('fa-play-circle');
  mainPlay.classList.add('fa-pause-circle');
})