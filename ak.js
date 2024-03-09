let playButton = document.querySelector(".button");
let playImage = document.querySelector(".rat");
let jk=document.querySelector(".tt");
let audio = new Audio("Taylor_Swift_-_Daylight.mp3");

function playMusic() {
    if (audio.paused) {
        audio.play();
        playImage.src = "pause.png"; // Change to the pause image
    } else {
        audio.pause();
       playImage.src = "play.png"; // Change to the play image
    }
}

function stopMusic() {
    audio.pause();
    playImage.src="play.src"
    
}

playButton.addEventListener("click", playMusic);
playButton.addEventListener("dblclick", stopMusic);

let talkButton = document.querySelector(".talk");
let catImage = document.querySelector(".cat");
let second = new Audio("Taylor_Swift_-_Midnight_Rain.mp3");

function blue() {
    if (second.paused) {
        second.play();
        catImage.src = "pause.png"; // Change to the pause image
    } else {
        second.pause();
        catImage.src = "play.png"; // Change to the play image
    }
}

function stopMusicSecond() {
    second.pause();
}

talkButton.addEventListener("click", blue);
talkButton.addEventListener("dblclick", stopMusicSecond);

let du=document.querySelector(".but");
let hu=document.querySelector(".rt");
let third=new Audio("Ariana-Grande-7-rings-Official-Video.mp3");
function op(){
    if(third.paused){
        third.play();
       hu.src = "pause.png";
    }
    else{
        third.pause();
       hu.src = "play.png";

    }
}
function nk(){
    third.pause()
}
du.addEventListener("click",op);
du.addEventListener("dblclick",nk);

let ty=document.querySelector(".list");
let ball=document.querySelector(".ok");
let fourth=new Audio('Taylor_Swift_-_Cardigan-naijalatestsong.com.ng.mp3');
function phoniex(){
    if(fourth.paused){
        fourth.play();
       ball.src = "pause.png";
    }
    else{
        fourth.pause();
       ball.src = "play.png";

    }
}
function py(){
    fourth.pause()
    ball.src = "play.png"
}
ty.addEventListener("click",phoniex)
ty.addEventListener("dblclick",py)

let ve=document.querySelector(".bu");
let cd=document.querySelector(".ts");
let fifth=new Audio("SZA_-_Low.mp3");
function fo(){
    if(fifth.paused){
        fifth.play();
        cd.src="pause.png"
    }
    else{
        fifth.pause();
        cd.src="play.png"
    }
}
function pyy(){
    fourth.pause()
    ball.src = "play.png"
} 
ve.addEventListener("click",fo);
ve.addEventListener("dblclick",pyy);
