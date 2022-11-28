"use strict";

let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft","ArrowRight","ArrowLeft", "ArrowRight","b","a","Enter"];
let keysPressed = [];


$(document).keyup(function(event) {
        keysPressed.push(event.key);
        if(keysPressed.length > 11){
            keysPressed.shift();
        }
        if(konamiCode.toString().toLowerCase() === keysPressed.toString().toLowerCase()){
            activateCheatCode();
        }
        console.log(keysPressed)
    });

function activateCheatCode(){
    $('body').css('background-image', 'url(img/konami.jpg)').css('background-size', 'cover');
}



