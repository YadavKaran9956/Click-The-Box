var start;
var diff = 0; 

start = new Date().getTime();

document.querySelector(".square").onclick = () => {
    var end = new Date().getTime();
    diff = (end - start) / 1000;
    if(diff != 0) {
        document.querySelector(".gameInfo1").style.display = "inline";
        document.querySelector(".reactionTime").innerHTML = diff + " seconds";
    } 
    move();
    var bckgcolor = generateRandomColor();
    document.querySelector(".square").style.backgroundColor = bckgcolor;
}

function move() {
    var left = Math.random() * 900;
    var right = Math.random() * 900;
    var top = Math.random() * 500;
    var bottom = Math.random() * 500;

    var height = Math.random() * 300 + 20;
    var width = Math.random() * 300 + 20;

    document.querySelector(".square").style.left = left + "px";
    document.querySelector(".square").style.right = right + "px";
    document.querySelector(".square").style.top = top + "px";
    document.querySelector(".square").style.bottom = bottom + "px";

    document.querySelector(".square").style.height = height + "px"
    document.querySelector(".square").style.width = width + "px"

    start = new Date().getTime();
}

function generateRandomColor() {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let hexColor = randomNumber.toString(16);
    hexColor = hexColor.padStart(6, '0');
    return `#${hexColor.toUpperCase()}`;
}

