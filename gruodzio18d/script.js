"use strict"

let sound = new Audio("jingle-bells.mp3")
let isPlaying = false;

function toggleSound () {
    if (isPlaying) {
        sound.pause();
    } else {
        sound.play()
    }
    isPlaying=!isPlaying
}

const playButton = document.querySelector('.btn');
playButton.addEventListener('click', toggleSound)


