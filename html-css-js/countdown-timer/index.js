
let [seconds, minutes, hours] = [0,0,0];

let display = document.querySelector('.time');

function stop() {
    seconds++;
    if(seconds === 60) {
        seconds = 0;
        minutes++;
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let hour = hours < 10 ? `0${hours}`: hours;
    let minute = minutes < 10 ? `0${minutes}`: minutes;
    let second = seconds < 10 ? `0${seconds}`: seconds;
    display.innerHTML = `${hour}: ${minute}: ${second}`;
}

let timer;
function startTimer() {
    if(timer) {
        clearInterval(timer);
    }
    timer = setInterval(stop, 1000);
}
function stopTimer() {
    clearInterval(timer);
}
function resetTimer() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    display.innerHTML = '00:00:00';
}