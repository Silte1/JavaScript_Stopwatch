const wrapper = document.querySelector('.watchContainer'),
startButton = document.getElementById('button-start'),
stopButton = document.getElementById('button-stop'),
resetButton = document.getElementById('button-reset'),
hour = document.getElementById('hours'),
minute = document.getElementById('minutes'),
second = document.getElementById('seconds'),
millisecond = document.getElementById('millisecond');

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
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        minute.innerHTML = '00';
        hour.innerHTML = '00';
        second.innerHTML = '00';
        millisecond.innerHTML = '00';
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

    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s;
    millisecond.innerHTML = ms;
}



