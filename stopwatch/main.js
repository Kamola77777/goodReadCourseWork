var hr = 0;
var min = 0;
var sec = 0;
var t;
 function startTimer() {
     if(sec<59) {
        sec++;
        document.getElementById('sec').innerHTML = sec;
     } else {
        sec = 0;
        min++
        document.getElementById('sec').innerHTML = sec;
     }
     if(min<59) {
         document.getElementById('min').innerHTML = min;
     } else {
         min = 0;
         hr++
         document.getElementById('min').innerHTML = min;
      }
      if(hr<24) {
          document.getElementById('hr').innerHTML = hr;
      } else {
          stop();
      }
 } 
 function start(){
     t = setInterval(startTimer,1000);
     document.getElementById('start').disabled = true;
 }
   
function stop() {
    clearInterval(t);
    document.getElementById('start').disabled = false;
}
function reset(){
    hr  =0;
    min = 0;
    sec = 0;
   
    clearInterval(t);
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('hr').innerHTML = '00';
}
   