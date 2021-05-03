//change_color
let actProps={
  "border-color":"black",
  "background-color":"#bbbaba",
  "color":"black"
}
let inactProps={
  "border-color":"#868686",
  "background-color":"#e6e6e6",
  "color":"lightgray"
}

$(document).ready(function(){
  $("#start").click(function(){
    $(this).css(inactProps);
    $("#stop,#reset").css(actProps);
  });
  $("#stop").click(function(){
    $(this).css(inactProps);
    $("#start,#reset").css(actProps);
  });
  $("#reset").click(function(){
    $(this).css(inactProps);
    $("#start").css(actProps);
  });
});


//Define values
let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let interval =null;

//Calculation of Stopwatch
function stopWatch(){
  ms++;
  
  if(ms / 10 ===1){
    ms = 0;
    sec++;
    
    if(sec / 60 ===1){
      sec =0;
      min++;
    }
    
    if(min / 60 ===1){
      min = 0;
      hour++;
    }
  }
  
  //Display to user
  document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec + ":" + ms;
}

//Movemnet of clicked "start","stop","reset"
function started(){
  interval = window.setInterval(stopWatch,100);
  start.disabled = true;
  reset.disabled = true;
}
function stopped(){
  window.clearInterval(interval);
  interval = null;
  start.disabled = false;
  reset.disabled = false;
}
function resetted(){
  window.clearInterval(interval);
  ms = 0;
  sec = 0;
  min = 0;
  hour = 0;
  start.disabled = false;
  document.getElementById("timer").innerHTML ="0:0:0:0";
}

start.addEventListener("click", started);
stop.addEventListener("click", stopped);
reset.addEventListener("click", resetted);