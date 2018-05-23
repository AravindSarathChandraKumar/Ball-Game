var canvas;
 var canvasContext;
 var ballX = 50;
    var ballY = 50; 
var ballSpeedX = 5;
var ballSpeedY = 4;

var paddle1Y = 250;
const PADDLE_HEIGHT = 100;
 window.onload = function(){
     
     canvas = document.getElementById("game");
     canvasContext = canvas.getContext('2d');
     var framesPerSecond = 30;
     setInterval(function(){
         draw();
         move();
     },1000/framesPerSecond);
 } 
 
 function move(){
     
     ballX=ballX + ballSpeedX;
     if(ballX < 0){
         ballSpeedX = -ballSpeedX;
     }
     if(ballX > canvas.width){
         ballSpeedX = -ballSpeedX;
     }
     ballY=ballY + ballSpeedY;
     if(ballY < 0){
         ballSpeedY = -ballSpeedY;
     }
     if(ballY > canvas.height){
         ballSpeedY = -ballSpeedY;
     }
 }
    
function draw(){
    // this line blank out the scree
    drawRect(0,0,canvas.width,canvas.height,'black');
    //this will be paddle 
    drawRect(0,210,10,100,'white');
    //this will be  ball
    drawBall(ballX,ballY,10,'white');
}

//function to drawball
function drawBall(x,y,radius,color){
    
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    //parameters are x-axis,y-axis,radius,angle,rest is same for all circle
    canvasContext.arc(x,y,radius,0,Math.PI*2,true);
    canvasContext.fill();


    
}
function drawRect(topX,topY,width,height,color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(topX,topY,width,height);
    
}