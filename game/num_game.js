//Javascript file

//number generator
right_num = Math.floor(Math.random()*19) +1;

//array to hold guess values
var a = new Array(19)

//variable will keep track of the array and number of guesses
var b = 0;
b = parseInt(b);
var last = 1;
var current = 0;

//prompts user and captures their guess, places it into array
a[b] = prompt("It's the number game! Guess a number between 1 and 19", "enter number here");

//background changer red
function changeBGred(){

		document.getElementById('game').style.backgroundColor = "red";

}

//background changer blue
function changeBGblue(){

		document.getElementById('game').style.backgroundColor = "blue";

}

//background changer black
function changeBGgrey(){

		document.getElementById('game').style.backgroundColor = "#0f0f0f";

}
	
//special statement if they guess right on the first try
if (a[b] == right_num){
	document.write("The correct answer is " + right_num + "!<br />");
	document.write("Holy toledo you got it on the first try!<br />");
	document.write("You're as hot as it gets!<br />");
	document.write('<img src="images/Mordor.gif" /><br />');
}

else{
		//do/while loop loops until they get it right, or they guess 19 guesses
		do{
		//increment b to add the next guess to the next array location and 
		//also keeps track of how many guesses the user has guessed 
		b++;
		
		if(current < last){
		document.write("<br />" + a[b-1] + '<img src="images/mordor.jpg" /><br />');	
		changeBGred();	
		//assigns next guess to next array location
		//default for second gues..because trying and failing is better than not trying at all!
		a[b] = prompt("Getting warmer! Try again:", "enter number here");	
		}
		
		if(current > last){
		document.write("<br />" + a[b-1] + '<img src="images/arctic.jpg" /><br />');
		changeBGblue();
		//assigns next guess to next array location
		a[b] = prompt("Getting colder! Try again:", "enter number here");	
		}
		
		if(current == last){
		document.write("<br />" + a[b-1] + '<img src="images/meh.jpg" /><br />');	
		//assigns next guess to next array location
		a[b] = prompt("Not any warmer OR colder! Try again:", "enter number here");		
		}
		//keeps track of last guess and it's relation to the right number
		last = Math.abs(right_num - a[b-1]);
		//sets current proximity to right_num to current variable
		current = Math.abs(right_num - a[b]);
		}
		while (a[b] != right_num && b < 19)
	
		//only displays when you get it right!
		if(a[b]==right_num){
			changeBGgrey();
			document.write(a[b] + "<br />");
			document.write("<h2>Booyah you're right!</h2><br />");
			document.write("The correct answer is " + right_num + ".<br />");
			document.write('<img src="images/fireworks.gif" /><br />');	
			document.write("Here are your guesses: <br />");
			
				//checking for undefined so those locations dont print
				for(var i=0; i<a.length; i++){
					if (typeof a[i] !== "undefined"){
					document.write(a[i] + "<br />");
					}
				}
				
		}	
		
		//user is not allowed more than 19 guesses
		if (b >= 19){
			document.write("How could you possibly need more than 19 guesses?? <br /><br />");
			document.write('<img src="images/no_time.gif" /><br />');
			document.write("The correct answer was " + right_num + ".<br />");
			document.write("Please refresh the page and try again.");
		}	
}





