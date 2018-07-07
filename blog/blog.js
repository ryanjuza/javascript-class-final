//main Javascript for blog page

var first = "";
var second = "";
var third = "";

function post(){

	var entry = document.getElementById("entry").value;
	

	if(first == ""){
		first = entry;
		document.getElementById("post1").innerHTML = first;
		document.getElementById("post1").style.display = 'block'
		document.getElementById("del1").style.display = 'block';
	}
	
	else if(first != "" && second == ""){
		second = entry;
		document.getElementById("post2").innerHTML = second;
		document.getElementById("post2").style.display = 'block'
		document.getElementById("del2").style.display = 'block';
	}
	
	else if(first != "" && second != "" && third == ""){
		third = entry;
		document.getElementById("post3").innerHTML = third;
		document.getElementById("post3").style.display = 'block'
		document.getElementById("del3").style.display = 'block';
	}
	
	if(first != "" && second != "" && third != ""){
		alert("There is a 3 post maximum. Please delete an old post before posting a new one.");
	}

}

//these change css!!!!
function del1(){
	document.getElementById("post1").style.display = 'none';
	document.getElementById("del1").style.display = 'none';	
	first = "";
}

function del2(){
	document.getElementById("post2").style.display = 'none';
	document.getElementById("del2").style.display = 'none';
	second = "";
}

function del3(){
	document.getElementById("post3").style.display = 'none';
	document.getElementById("del3").style.display = 'none';
	third = "";
}