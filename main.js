var canvas;
 var canvasContext;
 var ballX = 50;
    var ballY = 50; 
var ballSpeedX = 5;
var ballSpeedY = 4;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

function calculateMousePos(evt){
    
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return{
      x:mouseX,
      y:mouseY    
    };
}


 window.onload = function(){
     
     canvas = document.getElementById("game");
     canvasContext = canvas.getContext('2d');
     var framesPerSecond = 30;
     setInterval(function(){
         draw();
         move();
     },1000/framesPerSecond);
     
     canvas.addEventListener('mousemove',function(evt){
         
         var mousePos = calculateMousePos(evt);
             paddle1Y = mousePos.y-(PADDLE_HEIGHT/2);
         
         
     });
 } 
 
 function ballReset(){

     ballSpeedX = -ballSpeedX;     
     ballX = canvas.width/2;
     ballY = canvas.height/2;
 }
 
 function move(){
     
     ballX=ballX + ballSpeedX;
     if(ballX < 0){
         
         if(ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT){
             
             ballSpeedX = -ballSpeedX;
         }else{
        
        ballReset();
     }
     }
     if(ballX > canvas.width){
         if(ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT){
             
             ballSpeedX = -ballSpeedX;
         }else{
        
          ballReset();
     }
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
    //this will be player paddle 
    drawRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
    
    //this will be compputer paddle 
    drawRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
    
    
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