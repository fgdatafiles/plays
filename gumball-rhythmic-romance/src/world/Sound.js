//Canción GamePlay
var timerOne = new Audio("sound/count_1.mp3");
var timerTwo = new Audio("sound/count_2.mp3");
var timerThree = new Audio("sound/count_3.mp3");

//LEVEL 1

var level1 = [
    "sound/level1/1.mp3" ,
    "sound/level1/2.mp3" ,
    "sound/level1/3.mp3" ,
    "sound/level1/4.mp3"
];

var level2 = [
    "sound/level2/1.mp3" ,
    "sound/level2/2.mp3" ,
    "sound/level2/3_1.mp3" ,
    "sound/level2/3_2.mp3" ,
    "sound/level2/4.mp3" ,
    "sound/level2/5.mp3"
];

var level3 = [
    "sound/level3/1.mp3" ,
    "sound/level3/2.mp3" ,
    "sound/level3/3.mp3" ,
    "sound/level3/4.mp3" ,
    "sound/level3/5.mp3" ,
    "sound/level3/6.mp3" ,
    "sound/level3/7.mp3" ,
    "sound/level3/8.mp3"
];

var level4 = [
    "sound/level4/1.mp3" ,
    "sound/level4/2.mp3" ,
    "sound/level4/3.mp3" ,
    "sound/level4/4.mp3" ,
    "sound/level4/5.mp3" ,
    "sound/level4/6.mp3" ,
    "sound/level4/7.mp3" ,
    "sound/level4/8.mp3",
    "sound/level4/9.mp3"
];

var level5 = [
    "sound/level5/1.mp3" ,
    "sound/level5/2.mp3" ,
    "sound/level5/3.mp3" ,
    "sound/level5/4.mp3" ,
    "sound/level5/5.mp3" ,
    "sound/level5/6.mp3" ,
    "sound/level5/7.mp3" ,
    "sound/level5/8.mp3" ,
    "sound/level5/9.mp3" ,
    "sound/level5/10.mp3" ,
    "sound/level5/11.mp3" ,
    "sound/level5/12.mp3"
];

var soundLevel1 = [];
var soundLevel2 = [];
var soundLevel3 = [];
var soundLevel4 = [];
var soundLevel5 = [];

for(var i=0; i<level1.length; i++){
    soundLevel1[i] = new Audio();
    soundLevel1[i].src = level1[i];
    soundLevel1[i].preload = "auto";
}

for(var i=0; i<level2.length; i++){
    soundLevel2[i] = new Audio();
    soundLevel2[i].src = level2[i];
    soundLevel2[i].preload = "auto";
}

for(var i=0; i<level3.length; i++){
    soundLevel3[i] = new Audio();
    soundLevel3[i].src = level3[i];
    soundLevel3[i].preload = "auto";
}

for(var i=0; i<level4.length; i++){
    soundLevel4[i] = new Audio();
    soundLevel4[i].src = level4[i];
    soundLevel4[i].preload = "auto";
}

for(var i=0; i<level5.length; i++){
    soundLevel5[i] = new Audio();
    soundLevel5[i].src = level5[i];
    soundLevel5[i].preload = "auto";
}

var soundButton = new Audio("sound/button.mp3");

timerOne.preload = "auto";
timerTwo.preload = "auto";
timerThree.preload = "auto";
soundButton.preload = "auto";

//Obtener y Modificar estados

function getVolume() {
    var volume = "true";

    if (localStorage.getItem("volume") != undefined) {
        volume = localStorage.getItem("volume");
    }
    return volume;
}

function setVolume(volume) {
    window.localStorage.setItem("volume", volume);
}

function getEffect() {
    var effect = "true";

    if (localStorage.getItem("effect") != undefined) {
        effect = localStorage.getItem("effect");
    }
    return effect;
}

function setEffect(effect) {
    window.localStorage.setItem("effect", effect);
}

//Play and Pause Music

function soundButtonPlay() {
    if (getEffect() == "true") {
        soundButton.play();
        soundButton.volume = 1;
    }
}

function soundPauseGeneral(){

    for(var i = 0; i<soundLevel1.length; i++){
        if(soundLevel1[i] != null){
            soundLevel1[i].currentTime = 0;
            soundLevel1[i].pause();
        }
    }

    for(var i = 0; i<soundLevel2.length; i++){
        if(soundLevel2[i] != null){
            soundLevel2[i].currentTime = 0;
            soundLevel2[i].pause();
        }
    }

    for(var i = 0; i<soundLevel3.length; i++){
        if(soundLevel3[i] != null){
            soundLevel3[i].currentTime = 0;
            soundLevel3[i].pause();
        }
    }

    for(var i = 0; i<soundLevel4.length; i++){
        if(soundLevel4[i] != null){
            soundLevel4[i].currentTime = 0;
            soundLevel4[i].pause();
        }
    }

    for(var i = 0; i<soundLevel5.length; i++){
        if(soundLevel5[i] != null){
            soundLevel5[i].currentTime = 0;
            soundLevel5[i].pause();
        }
    }
}

function timerOnePlay() {
    if (getEffect() == "true") {
        timerOne.play();
        timerOne.volume = 1;
    }
}

function timerTwoPlay() {
    if (getEffect() == "true") {
        timerTwo.play();
        timerTwo.volume = 1;
    }
}

function timerThreePlay() {
    if (getEffect() == "true") {
        timerThree.play();
        timerThree.volume = 1;
    }
}

function level1Play(segment){
    if (getVolume() == "true") {
        soundLevel1[segment-1].play();
    }
}

function level2Play(segment){
    if (getVolume() == "true") {
        soundLevel2[segment-1].play();
    }
}

function level3Play(segment){
    if (getVolume() == "true") {
        soundLevel3[segment-1].play();
    }
}

function level4Play(segment){
    if (getVolume() == "true") {
        soundLevel4[segment-1].play();
    }
}

function level5Play(segment){
    if (getVolume() == "true") {
        soundLevel5[segment-1].play();
    }
}