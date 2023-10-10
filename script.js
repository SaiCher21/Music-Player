('use strict');

const wrapper = document.querySelector(".wrapper"),
      musicImg = document.querySelector(".img"),
      musicName = document.querySelector(".name"),
      musicArtist = document.querySelector(".artist"),
      playPauseBtn = document.querySelector(".play-pause"),
      preBtn = wrapper.querySelector("#prev"),
      nextBtn = wrapper.querySelector("#next"),
      mainAudio = wrapper.querySelector("#main-audio"),
      progressArea = document.querySelector(".progress-area"),
      progressBar  = document.querySelector("progress-bar");

const musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;
window.addEventListener("load", () =>{
    loadMusic(musicIndex);
});

function loadMusic(indexNum){
    musicName.innertext = allMusic[indexNum - 1].name;
    musicArtist.innerText = allMusic[indexNum - 1].artist;
    musicImg.src = `assets/images/${all[indexNum - 1].src}.jpg`;
    musicAudio.src = `assets/songs/${all[indexNum - 1].src}.mp3`;
}