var box = document.getElementById('box');
var container = document.getElementById('container');

var width = container.offsetWidth;
var height = container.offsetHeight;

var yourTime = document.getElementById('time');
var randTime = Math.round(Math.random()*2000);
var time = Date.now();
var clickedTime;
var createdTime;

// Generates a random hexidecimal code
function getColor() {
	var num = "1234567890ABCDEFG".split('');
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += num[Math.round(Math.random() * 16)];
	}
	return color;
}

// Creates new box 
function newBox() {
	setTimeout(function(){
		if(Math.random() > 0.5) {
			box.style.borderRadius="100px";
		} else {
			box.style.borderRadius="0";
		}
		createdTime = Date.now();
		box.style.display="block";
		box.style.backgroundColor=getColor();
		box.style.top=height*Math.random()+"px";
		box.style.left=width*Math.random()+"px";
	}, randTime);
}

// Hides box on click - Initiates newBox funciton to make a new box appear
box.onclick=function(){
	this.style.display="none";

	clickedTime = Date.now();
	yourTime.innerHTML=(clickedTime - createdTime)/1000;
	newBox();
}