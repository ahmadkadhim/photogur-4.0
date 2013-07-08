$(document).ready(function() {
	
//Drawing the canvas of related artists with images

var canvasElement;
var drawingContext;
var pattern;

var canvasWidth = 650;
var canvasHeight = 650;
var fitFactor = 180;
var widthFactor = canvasWidth/fitFactor;
var heightFactor = canvasHeight/fitFactor;
var hexagonBoxSide = 100*widthFactor;

var startingArtist = $("#0link").text();
var firstArtist = $("#1link").text();
var secondArtist = $("#2link").text();
var thirdArtist = $("#3link").text();
var fourthArtist = $("#4link").text();
var fifthArtist = $("#5link").text();
var sixthArtist = $("#6link").text();

//var startingImage = $("#0image");
var startingImage = new Image();
startingImage.src = $("#0image").attr("src");
var firstImage = new Image();
firstImage.src = $("#1image").attr("src");
var secondImage = new Image();
secondImage.src = $("#2image").attr("src");
var thirdImage = new Image();
thirdImage.src = $("#3image").attr("src");
var fourthImage = new Image();
fourthImage.src = $("#4image").attr("src");
var fifthImage = new Image();
fifthImage.src = $("#5image").attr("src");
var sixthImage = new Image();
sixthImage.src = $("#6image").attr("src");


//var firstImage = $("#1image");
var secondImage = $("2image");
var thirdImage = $("#3image");
var fourthImage = $("#4image");
var fifthImage = $("#5image");
var sixthImage = $("#6image");

var imageWidth = 100;
var imageHeight = 100;

var startingPointX = canvasWidth/2;
var startingPointY = canvasWidth/2;
var firstPointX = (canvasWidth-hexagonBoxSide)/2;
var firstPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.21325);
var secondPointX = (canvasWidth-hexagonBoxSide)/2;
var secondPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.78675);
var thirdPointX = canvasWidth/2;
var thirdPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide);
var fourthPointX = (canvasWidth-hexagonBoxSide)/2+(hexagonBoxSide);
var fourthPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.78675);
var fifthPointX = (canvasWidth-hexagonBoxSide)/2+(hexagonBoxSide);
var fifthPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.21325)
var sixthPointX = canvasWidth/2;
var sixthPointY = (canvasHeight-hexagonBoxSide)/2

var offset = 20;

runner();

function addCanvas () {
	canvasElement = document.createElement("canvas");

	document.body.appendChild(canvasElement);
	canvasElement.width = canvasWidth;
	canvasElement.height = canvasHeight;
	context = canvasElement.getContext("2d");

	// Possible feature to make the whole canvas circular shape

	// context.fillStyle = "rgba(cc,cc,33,.20)";
	// // Begin path
	// context.beginPath();
	// //Canvas shape
	// context.arc(400,400,300,0,Math.PI*2,true);
	// // Close path
	// context.closePath();
	// // Fill shape
	// context.fill();

}

function drawGrid () {
	context.beginPath();

	for (var x = 0.5; x < canvasWidth; x += 20) {
 	  context.moveTo(x, 0);
 	  context.lineTo(x, canvasWidth);
	}

	for (var y = 0.5; y < canvasHeight; y += 20) {
 	  context.moveTo(0, y);
  	  context.lineTo(canvasHeight, y);
	}

	context.lineWidth = 1;
	context.strokeStyle = "eee";
	context.stroke();

}


function drawHexagon () {
	
	context.beginPath();

	context.moveTo(firstPointX,firstPointY);
	context.lineTo(secondPointX,secondPointY);
	context.moveTo(secondPointX,secondPointY);
	context.lineTo(thirdPointX,thirdPointY);
	context.moveTo(thirdPointX,thirdPointY);
	context.lineTo(fourthPointX,fourthPointY);
	context.moveTo(fourthPointX,fourthPointY);
	context.lineTo(fifthPointX,fifthPointY);
	context.moveTo(fifthPointX,fifthPointY);
	context.lineTo(sixthPointX,sixthPointY);
	context.moveTo(sixthPointX,sixthPointY);
	context.lineTo(firstPointX,firstPointY);
	context.lineWidth = 4;
	context.strokeStyle = "#000";
	context.stroke();

	context.closePath();
}

function writeText (artist, x, y) {

	context.font = "24px Avant Garde"
	context.fillStyle = "#777"
	context.textBaseline = "middle";
	context.textAlign = "center";
	context.fillText(artist, x, y+offset)
}

function runner () {
	addCanvas();
	drawGrid();
	drawHexagon();
}

	//context.drawImage(startingImage, 20, 40);
	// context.drawImage(firstImage, 0, 0);
	// context.drawImage(secondImage, 0, 0);
	// context.drawImage(thirdImage, 0, 0);
	// context.drawImage(fourthImage, 0, 0);
	// context.drawImage(fifthImage, 0, 0);
	// context.drawImage(sixthImage, 0, 0);


	startingImage.onload = function() {
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(startingImage, startingPointX-(20*widthFactor), startingPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(startingArtist, startingPointX, startingPointY);
	}
	firstImage.onload = function() {
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(firstImage, firstPointX-(20*widthFactor), firstPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(firstArtist, firstPointX-offset, firstPointY-offset);
	}
	secondImage.onload = function() {
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(secondImage, secondPointX-(20*widthFactor), secondPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(secondArtist, secondPointX-offset, secondPointY-offset);
	}
	thirdImage.onload = function() {
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(thirdImage, thirdPointX-(20*widthFactor), thirdPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(thirdArtist, thirdPointX-offset, thirdPointY-offset);
	}
	fourthImage.onload = function() {
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(fourthImage, fourthPointX-(20*widthFactor), fourthPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(fourthArtist, fourthPointX-offset, fourthPointY-offset);
	}
	fifthImage.onload = function() {
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(fifthImage, fifthPointX-(20*widthFactor), fifthPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(fifthArtist, fifthPointX-offset, fifthPointY-offset);
	}
	sixthImage.onload = function() {
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(sixthImage, sixthPointX-(20*widthFactor), sixthPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(sixthArtist, sixthPointX-offset, sixthPointY-offset);
	}

	// writeText(startingArtist, startingPointX,startingPointY);
	// writeText(firstArtist, firstPointX-offset, firstPointY-offset);
	writeText(secondArtist, secondPointX-offset, secondPointY+offset);
	writeText(thirdArtist, thirdPointX, thirdPointY+offset);
	writeText(fourthArtist, fourthPointX+offset, fourthPointY+offset);
	writeText(fifthArtist, fifthPointX+offset, fifthPointY-offset);
	writeText(sixthArtist, sixthPointX, sixthPointY-offset);

})


