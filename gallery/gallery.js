//Javascript file

//pictures array
var gallery = new Array(7);
gallery[0] = new Image();
gallery[0].src =  "images/carnage.png"
gallery[1] = new Image();
gallery[1].src =  "images/spiderman.png"
gallery[2] = new Image();
gallery[2].src =  "images/starscream.png"
gallery[3] = new Image();
gallery[3].src =  "images/v4v.png"
gallery[4] = new Image();
gallery[4].src =  "images/Dalek.png"
gallery[5] = new Image();
gallery[5].src =  "images/dragon.png"
gallery[6] = new Image();
gallery[6].src =  "images/osxgalaxy.png"
gallery[7] = new Image();
gallery[7].src =  "images/lion.png"

//descriptions array
var caption = new Array(7);
caption[0] =  "One of Spidey's best villans."
caption[1] =  "Spiderman is awesome!"
caption[2] =  "My favorite Decepticon."
caption[3] =  "This is such a good story!"
caption[4] =  "EXTERMINATE!"
caption[5] =  "Sweet lookin dragon."
caption[6] =  "Mac users recognize this?"
caption[7] =  "My favorite cat :)"

var counter = 0;
function forward()
{				if(counter==7)
				 {
				 counter = -1;
				 }
				 //alert(counter);
				 counter++;
 				 document.getElementById('image1').src = gallery[counter].src;
				 document.getElementById('caption1').innerHTML = caption[counter];	
}
function backward()
{				 if(counter==0)
				 {
				 counter = 8;
				 }
				 //alert(counter);
				 counter--;
 				 document.getElementById('image1').src = gallery[counter].src;
				 document.getElementById('caption1').innerHTML = caption[counter];		 
}

//back button array
var bbut = new Array(2);
bbut[0] = new Image();
bbut[0].src =  "images/back.gif"
bbut[1] = new Image();
bbut[1].src =  "images/back_black.gif"
bbut[2] = new Image();
bbut[2].src =  "images/back_press.gif"

function b_out()
{
 document.getElementById('back').src = bbut[0].src;
}
function b_over()
{
 document.getElementById('back').src = bbut[1].src;
}
function b_click()
{
 document.getElementById('back').src = bbut[2].src;
}

//forward button array
var fbut = new Array(2);
fbut[0] = new Image();
fbut[0].src =  "images/forward.gif"
fbut[1] = new Image();
fbut[1].src =  "images/forward_black.gif"
fbut[2] = new Image();
fbut[2].src =  "images/forward_press.gif"

function f_out()
{
 document.getElementById('forw').src = fbut[0].src;
}
function f_over()
{
 document.getElementById('forw').src = fbut[1].src;
}
function f_click()
{
 document.getElementById('forw').src = fbut[2].src;
}





