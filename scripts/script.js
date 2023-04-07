const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function() {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function() {
    timer = false;
});

resetBtn.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
});