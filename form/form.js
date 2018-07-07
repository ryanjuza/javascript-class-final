//Javascript

function enter(){
	//values of input
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	
	//gets dropbox choice
	var choice = document.getElementById("choice");
	var drop = choice.options[choice.selectedIndex].value;
	
	var terms = document.getElementById("terms");
	
	//this link helped me with the regexp: https://www.youtube.com/watch?v=UKiy9H_CD0M&feature=endscreen&NR=1
	var regexemail = /^([A-Za-z0-9\.\-_]){1,}\@([A-Za-z0-9\.\-_]){1,20}\.([A-Za-z]{2,4})$/;
	var regexphone = /^\(([0-9]{3})\)\-([0-9]{3})\-([0-9]{4})$/;

	//VALIDATIONS
	if (name==null || name==""){
	  alert("Name must be filled out");
	  document.getElementById("name").focus();
	  return false;
	}
	 
	if (email==null || email==""){
	  alert("email must be filled out");
	  document.getElementById("email").focus();
	  return false;
	}
	else{
		if(regexemail.test(email)==false){
			alert("Invalid eMail");
			document.getElementById("email").focus();
			return false;
		}
	}
	
	if (phone==null || phone==""){
	  alert("Phone # must be filled out");
	  document.getElementById("phone").focus();
	  return false;
	}
	else{
		if(regexphone.test(phone)==false){
			alert("Invalid phone #");
			document.getElementById("phone").focus();
			return false;
		}
	}
	
	
	if (drop=="blank"){
	  alert("You must choose a favorite");
	  document.getElementById("choice").focus();
	  return false;
	}
	
	if (terms.checked == false){
	  alert("You must approve to the terms of service");
	  document.getElementById("terms").focus();
	  return false;
	}
	
	
	//CONTENT AFTER FORM IS FILLED OUT CORRECTLY
	
	if (drop=="Daleks"){
	document.getElementById('content').innerHTML = "Daleks are the supreme beings of the universe <br /> <img src='images/daleks.jpg' /> <br /> <a href='http://en.wikipedia.org/wiki/Dalek' target='blank'>Dalek wiki</a>";
	}

	if (drop=="Cybermen"){
	document.getElementById('content').innerHTML = "Cybermen will make you like them <br /> <img src='images/cybermen.jpg' /> <br /> <a href='http://en.wikipedia.org/wiki/Cyberman' target='blank'>Cybermen wiki</a>";
	}
	
	if (drop=="Silence"){
	document.getElementById('content').innerHTML = "The Silence control us all <br /> <img src='images/silence.jpg' /> <br /> <a href='http://en.wikipedia.org/wiki/Silence_(Doctor_Who)' target='blank'>The Silence wiki</a>";;
	}
}