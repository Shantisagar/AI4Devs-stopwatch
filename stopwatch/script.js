// script.js

let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timerInterval;
let running = false;

const startPauseBtn = document.getElementById('startPauseBtn');
const clearBtn = document.getElementById('clearBtn');

startPauseBtn.addEventListener('click', () => {
    if (!running) {
        startTimer();
        startPauseBtn.textContent = 'Pause';
    } else {
        pauseTimer();
        startPauseBtn.textContent = 'Start';
    }
});

clearBtn.addEventListener('click', () => {
    clearTimer();
    startPauseBtn.textContent = 'Start';
});

function startTimer() {
    running = true;
    timerInterval = setInterval(updateTime, 10); // 10ms interval for precision
}

function pauseTimer() {
    running = false;
    clearInterval(timerInterval);
}

function clearTimer() {
    running = false;
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatMilliseconds(milliseconds);
}

function formatTime(value) {
    return value.toString().padStart(2, '0');
}

function formatMilliseconds(value) {
    return value.toString().padStart(3, '0');
}
