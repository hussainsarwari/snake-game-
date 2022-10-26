// variables 

let loc={x:0,y:0}
let ran1,ran2,ran3,ran4;
let seed=  document.querySelector("#seed");
let direction;
let snake=document.querySelector("#snake");
let RL=0;
let TB=0;
let stopMoveRight,StopMoveleft,StopMoveTop,StopMoveButton;
let massage=document.querySelector("#massage");
let play_btn=document.querySelector("#btn");
let snakeaccident=false;


// call functions
set_seed_possion();
paly();
// keys
document.onkeydown = function move(event) {
 if(play_btn.style.display=="none"){
   if(event.keyCode==37 ){
 
   StopMoveleft=setInterval( move_left ,10);
    clearInterval(StopMoveTop);  
    snake.style.transform="rotate("+0+"deg)";
    clearInterval(StopMoveButton);
    clearInterval(stopMoveRight)
    direction="left";
   
   }
else if(event.keyCode==38){
 
   StopMoveTop=setInterval(move_top,10);
   snake.style.transform="rotate("+90+"deg)";
   clearInterval(StopMoveleft);  
   clearInterval(StopMoveButton);
   clearInterval(stopMoveRight)
   direction="top";
}
else if(event.keyCode==39)
{
 
   stopMoveRight=setInterval(move_right, 10);
   clearInterval(StopMoveTop);  
   snake.style.transform="rotate("+0+"deg)";
    clearInterval(StopMoveButton);
    clearInterval(stopMoveleft)
   direction="right"
   }
else if(event.keyCode==40)
{
 
   StopMoveButton=setInterval(move_down,10)
   clearInterval(StopMoveTop);  
   snake.style.transform="rotate("+90+"deg)";
    clearInterval(StopMoveleft);
    clearInterval(stopMoveRight)
   direction="down";

   
}

}
else{
massage.innerHTML="Please start game!"
massage.style.left="0";
setTimeout(() => {
   massage.style.left="-423px";
}, 2000);

}

}


//  functions 

function move_right(){
   RL--;
 snake.style.right=RL+"px";  
check_accident();
}
function move_down(){
   check_accident();
   TB--;
 snake.style.bottom=TB+"px";  
}
function move_top(){
   check_accident();
   TB+=1;
 snake.style.bottom=TB+"px";  
}
function move_left(){
    
   RL++;
   snake.style.right=RL+"px";
   check_accident();
}
function set_direction(){
   if(direction=="top" || direction=="bottom"){

   }
   else{
      snake.style.transform="rotate("+0+"deg)";
   }
}
function check_accident(){
 if(snake.style.right=="220px" ||snake.style.right=="-240px"||snake.style.bottom=="230px"||snake.style.bottom=="-230px"){
massage.innerHTML="game over  ";
massage.style.left="0"
setTimeout(() => {
   massage.style.left="-423px"
}, 2000); 
clearInterval(StopMoveleft)
clearInterval(stopMoveRight)
clearInterval(StopMoveTop);
clearInterval(StopMoveButton);
play_btn.style.display="block";
}


}
function paly(){
   play_btn.addEventListener("click",()=>{
      
      play_btn.style.display="none";
   })

   setTimeout(()=>{
      massage.style.left="-423px";
   },2000)
}

function set_seed_possion(){
 ran1=480*Math.random();
 ran2=480*Math.random();
 ran3=480*Math.random();
 ran4=480*Math.random();
 seed.style.top=ran1+"px";
 seed.style.left=-ran2+"px";
 loc.x=-ran2;
 seed.style.right=ran3+"px";
 loc.x=ran3;
 seed.style.bottom=ran4+"px";
 loc.y=ran4;

}


function eat_food(){
 if(snake.style.left==seed.style.left || snake.style.top==seed.style.top || snake.style.bottom==seed.style.bottom){
   alert("yes")
 }  
}