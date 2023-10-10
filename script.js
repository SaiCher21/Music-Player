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

function playMusic(){
    wrapper.classList.add("paused");
    playPauseBtn.innerHtml =`<i class= fi fi-sr-pause></i>`;
    mainAudio.play();
}

function pauseMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.innerHtml =`<i class= fi fi-sr-play></i>`;
    mainAudio.pause();
}

function preMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function preMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}


playPauseBtn.addEventListener("click", () =>{
    const isMusicplay = wrapper.classList.contains("paused");
    isMusicplay ? pauseMusic() : playMusic();   
});

preBtn.addEventListener("click", () => {
    preMusic();
});

nextBtn.addEventListener("click", () => {
    nextMusic();
});

mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime/duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuration = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", () => {
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if(totalSec < 10){
            totalSec = `0{totalSec}`;
            musicDuration.innerText = `${totalMin}`
        } 
    });
    let currentMin = Math.floor(currentTime / 60);
    let CurrentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){
        currentSec = `0{currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`
});

progressArea.addEventListener("click", () => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
});

mainAudio.addEventListener("ended", () => {
    nextMusic();
});