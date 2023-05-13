const wrapper = document.querySelector('.watchContainer'),
startButton = document.getElementById('button-start'),
stopButton = document.getElementById('button-stop'),
resetButton = document.getElementById('button-reset'),
hour = document.getElementById('hours'),
minute = document.getElementById('minutes'),
second = document.getElementById('seconds'),
ten = document.getElementById('tens');

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
int = null



wrapper.addEventListener('click', (e)=>{
    if(e.target.id === 'button-start'){
        startButton.innerText = 'Continue'
        if(int!==null){
            clearInterval(int)
       
        } int = setInterval(timeDisplay, 10)
        
    } else if(e.target.id === 'button-stop'){

        clearInterval(int)
    } else if(e.target.id === 'button-reset'){
        clearInterval(int)
        second.innerHTML = '00';
        ten.innerHTML = '00';
        startButton.innerText = 'Start'

    }
})

timeDisplay = () =>{
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0; 
        seconds++ ;
        if(seconds == 60){
            seconds = 0; 
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
        }
    }}
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    hours.innerHTML = h
    minutes.innerHTML = m
    second.innerHTML = s;
    ten.innerHTML = ms;

  
}



/*let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('#timerRef');
let int = null;
let second = document.getElementById('seconds');
let ten = document.getElementById('tens');

document.getElementById('button-start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('button-stop').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('button-reset').addEventListener('click', ()=>{
    clearInterval(int);
    // [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    second.innerHTML = 00;
    ten.innerHTML = 00;

});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 second.innerHTML = s;
 ten.innerHTML = ms;
}*/