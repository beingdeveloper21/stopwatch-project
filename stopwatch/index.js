let [hours,minutes,seconds] = [0,0,0];
let displayTime=document.getElementById("time");
let timer=null;
function stopwatch(){
    seconds++;
    if(seconds==60){
        minutes++;
        seconds=0;
    if(minutes==60){
        hours++;
        minutes=0;
    }
   
    }
    let h=hours >= 10 ? hours:  "0" + hours;
    let m=minutes>= 10 ? minutes: "0" + minutes;
    let s=seconds >= 10 ? seconds:"0"+ seconds;
    displayTime.innerHTML= h+ ":" +m+ ":" +s;
}
    function play(){
        // if(timer!==null)
        //     {
        //         clearInterval(timer);
        //     }
       timer = setInterval(stopwatch,1000);
    }
    function pause(){
        clearInterval(timer)
    }
    function reset(){
        clearInterval(timer)
        displayTime.innerHTML= "00"+ ":" +"00"+ ":" +"00";
    }