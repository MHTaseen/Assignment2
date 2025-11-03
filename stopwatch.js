//Stopwatch variables
let seconds = 0;
let timerInterval = null;

const stopwatchDisplay = document.getElementById('stopwatch-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

function formatTime(sec) {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    stopwatchDisplay.textContent = formatTime(seconds);
}

startBtn.addEventListener('click', function() {
    if (timerInterval === null && seconds < 30) {
        timerInterval = setInterval(function() {
            seconds += 3;
            updateDisplay();
            
            if (seconds >= 30) {
                clearInterval(timerInterval);
                timerInterval = null;
                startBtn.disabled = true;
                stopBtn.disabled = true;
                console.log('Stopwatch reached 30 seconds and stopped automatically.');
            }
        }, 1000); // Run every 1 second
        
        // Update button states
        startBtn.disabled = true;
        stopBtn.disabled = false;
        console.log('Stopwatch started');
    }
});

stopBtn.addEventListener('click', function() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        console.log('Stopwatch stopped at:', formatTime(seconds));
    }
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    console.log('Stopwatch reset to 00:00');
});

console.log('Stopwatch initialized ✓');