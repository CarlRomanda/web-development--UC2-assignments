// JavaScript Timers
var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColour(){

    if (counter >= colours.length){
        counter = 0;
    }

    colourChanger.style.background = colours[counter];
    counter++;

}

var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function(){

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer Stopped";

};