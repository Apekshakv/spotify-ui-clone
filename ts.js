let playButton = document.querySelector(".button");
let playImage = document.querySelector(".rat");
let jk=document.querySelector(".tt");
let audio = new Audio("Taylor_Swift_-_Daylight.mp3");

function playMusic() {
    if (audio.paused) {
        audio.play();
        playImage.src = "pause.png"; 
    } else {
        audio.pause();
       playImage.src = "play.png"; 
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
        catImage.src = "pause.png"; 
    } else {
        second.pause();
        catImage.src = "play.png"; 
    }
}

function stopMusicSecond() {
    second.pause();
}

talkButton.addEventListener("click", blue);
talkButton.addEventListener("dblclick", stopMusicSecond);

let ty=document.querySelector(".list");
let ball=document.querySelector(".ok");
let fourth=new Audio("Taylor_Swift_-_Cardigan-naijalatestsong.com.ng.mp3");
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

let baby=document.querySelector(".bu");
let buu=document.querySelector(".ts");
let third =new Audio("Look What You Made Me Do(320Kbps.In).mp3");
function monet(){
    if(third.paused){
        third.play();
        buu.src= ("pause.png");
    }
    else{
        third.pause();
        buu.src="play.png";
    }
}
function mon(){
    third.pause();
    buu.src="play.png";
}
baby.addEventListener("click",monet);
baby.addEventListener("dblclick",mon);
