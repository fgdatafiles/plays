function getLevel() {
    var level = 0;

    if (localStorage.getItem("level") != undefined) {
        level = localStorage.getItem("level");
    }
    return level;
}

function setLevel(level) {
    window.localStorage.setItem("level", level);
}

function getNumLevel() {
    return 1;
}


function getFirstGame() {
    var gameFirst = "false";

    if (localStorage.getItem('gameFirst') != undefined) {
        gameFirst = localStorage.getItem("gameFirst");
    }

    return gameFirst;
}

function setFirstGame(gameFirst) {
    window.localStorage.setItem("gameFirst", gameFirst);
}

function getTutorial() {
    var tutorial = "false";

    if (localStorage.getItem('tutorial') != undefined) {
        tutorial = localStorage.getItem("tutorial");
    }

    return tutorial;
}

function setTutorial(tutorial) {
    window.localStorage.setItem("tutorial", tutorial);
}

//Sounds
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


//LevelDesbloqueados
function getLevel2Active(){
    var active = "false";

    if (localStorage.getItem("level2Active") != undefined) {
        active = localStorage.getItem("level2Active");
    }
    return active;
}

function setLevel2Active(active){
     window.localStorage.setItem("level2Active", active);
}

function getLevel3Active(){
    var active = "false";

    if (localStorage.getItem("level3Active") != undefined) {
        active = localStorage.getItem("level3Active");
    }
    return active;
}

function setLevel3Active(active){
     window.localStorage.setItem("level3Active", active);
}

function getLevel4Active(){
    var active = "false";

    if (localStorage.getItem("level4Active") != undefined) {
        active = localStorage.getItem("level4Active");
    }
    return active;
}

function setLevel4Active(active){
     window.localStorage.setItem("level4Active", active);
}

function getLevel5Active(){
    var level5Active = "false";

    if (localStorage.getItem("level5Active") != undefined) {
        level5Active = localStorage.getItem("level5Active");
    }

    return level5Active;
}

function setLevel5Active(active){
     window.localStorage.setItem("level5Active", active);
}