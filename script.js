let timeDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timeId = null;

startBtn.addEventListener('click', function(){
    if(timeId !== null){
        clearInterval(timeId);
    }
    timeId = setInterval(startTimer,10);
});
stopBtn.addEventListener('click', function(){
    clearInterval(timeId);
});
resetBtn.addEventListener('click', function(){
    clearInterval(timeId);
    timeDisplay.innerHTML = `00 : 00 : 00`;
});
function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timeDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;



}