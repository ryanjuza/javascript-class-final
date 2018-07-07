//Javascript file

var birdArr = new Array(7);
birdArr[0] = new Image();
birdArr[0].src =  "images/birdfly1.gif"
birdArr[1] = new Image();
birdArr[1].src =  "images/birdfly2.gif"
birdArr[2] = new Image();
birdArr[2].src =  "images/birdfly3.gif"
birdArr[3] = new Image();
birdArr[3].src =  "images/birdfly4.gif"
birdArr[4] = new Image();
birdArr[4].src =  "images/birdfly5.gif"
birdArr[5] = new Image();
birdArr[5].src =  "images/birdfly6.gif"
birdArr[6] = new Image();
birdArr[6].src =  "images/birdfly7.gif"
birdArr[7] = new Image();
birdArr[7].src =  "images/birdfly8.gif"


function change()
{
 document.getElementById('image2').src = birdArr[4].src;
 document.getElementById('fly').innerHTML = "Woah, you made the bird fly!<br />Flap down!";
}
function changeback()
{
 document.getElementById('image2').src = birdArr[1].src;
 document.getElementById('fly').innerHTML = "Woah, you made the bird fly!<br />Flap up!";
}



