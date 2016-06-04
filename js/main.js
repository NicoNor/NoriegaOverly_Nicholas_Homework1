/*
     Name:Nicholas Noriega Overly
     Date:June/02/16
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below

********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.


********************************************/


//Draw Rectangle here
window.onload = function(){
  if(Modernizr.canvas) {

  var myCanvas = document.getElementById("canvas1");
  var ctx = myCanvas.getContext("2d");

  ctx.fillStyle = 'rgb(135,206,235)';
  ctx.fillRect(0, 0, 50, 100);
  ctx.strokeStyle = "black";
  ctx.lineWidth= 2;
  ctx.strokeRect(0, 0, 50, 100);


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
  var myCanvas = document.getElementById("canvas2");
  var ctx = myCanvas.getContext("2d");

  ctx.strokeStyle = "black";
  ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
  ctx.lineWidth =1;

  ctx.beginPath();
  ctx.arc(50, 50, 20, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
    var myCanvas = document.getElementById("canvas3");
    var ctx = myCanvas.getContext("2d");

    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'green';
    ctx.lineWidth = '4';

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(125,150);
    ctx.lineTo(180,150);
    ctx.lineTo(140,185);
    ctx.lineTo(160,245);
    ctx.lineTo(100,205);
    ctx.lineTo(40,245);
    ctx.lineTo(60,185);
    ctx.lineTo(20,150);
    ctx.lineTo(75,150);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
  var myCanvas = document.getElementById("canvas4");
  var ctx = myCanvas.getContext("2d");

  ctx.strokeStyle = 'black';
  ctx.lineWidth = '4';

  ctx.beginPath();
  ctx.moveTo(40, 100);
  ctx.bezierCurveTo(100, -5, 200, -5, 260, 100);

  ctx.moveTo(40,100);
  ctx.bezierCurveTo(40,100, 55,120, 75,100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(75,100);
  ctx.bezierCurveTo(75,100, 85,120, 100,100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.bezierCurveTo(100,100, 110,120, 125,100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(125,100);
  ctx.bezierCurveTo(125,100, 135,120, 150,100);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(150,100);
  ctx.bezierCurveTo(150,100, 160,120, 175,100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(175,100);
  ctx.bezierCurveTo(175,100, 185,120, 200,100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(200,100);
  ctx.bezierCurveTo(200,100, 210,120, 225,100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(225,100);
  ctx.bezierCurveTo(225,100, 235,120, 260,100);
  ctx.stroke();

//I know there is a simpler way to have the code, but when I clean it I keep getting errors...

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can say whatever you would like in any color.

********************************************/

//Draw text here
  var myCanvas = document.getElementById("canvas5");
  var ctx = myCanvas.getContext("2d");
  var textGreet = "Hello, World! It is I! The Text";

  ctx.fillText(textGreet, 100,100);

  ctx.font = "1.4em Georgia";
  ctx.fillStyle = "Orange";
  ctx.fillText(textGreet, 5, 150);

  ctx.font ="1.2em Cursive";
  ctx.fillStyle = "black";
  ctx.strokeStyle="tan";
  ctx.fillText(textGreet, 5, 200);
  ctx.strokeText(textGreet, 5, 200);




/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together.

Using a combination of all the methods.
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

var myCanvas = document.getElementById("canvas7");
var ctx = myCanvas.getContext("2d");

ctx.strokeStyle = 'black';
ctx.lineWidth = '4';

ctx.beginPath();
ctx.moveTo(40, 100);
ctx.bezierCurveTo(100, -5, 200, -5, 260, 100);

ctx.moveTo(40,100);
ctx.bezierCurveTo(40,100, 55,120, 75,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75,100);
ctx.bezierCurveTo(75,100, 85,120, 100,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,100);
ctx.bezierCurveTo(100,100, 110,120, 125,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(125,100);
ctx.bezierCurveTo(125,100, 135,120, 150,100);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(150,100);
ctx.bezierCurveTo(150,100, 160,120, 175,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(175,100);
ctx.bezierCurveTo(175,100, 185,120, 200,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,100);
ctx.bezierCurveTo(200,100, 210,120, 225,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,100);
ctx.bezierCurveTo(225,100, 235,120, 260,100);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.lineWidth = '6';

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(150,200);
ctx.bezierCurveTo(150,200, 120,170, 150,200);


ctx.closePath();
ctx.stroke();
ctx.fill();

var tada = "Ta-Da!!! An umbrella.";

ctx.font = "1.4em Georgia";
ctx.fillStyle = "Blue";
ctx.fillText(tada, 40, 295);



}else {
  alert("This browser does not support canvas.");
  }
  console.log(Modernizr);
};
