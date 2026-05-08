// This variable stores the timer so we can stop it later
let countdownInterval;

function setAlarm() {
  // Accessing the input and heading elements
  const timeInput = document.getElementById("alarmSet");
  const timeHeading = document.getElementById("timeRemaining");

  // Convert input value to a number
  let timeRemaining = parseInt(timeInput.value);

  // If there is an input error, stop the function
  if (isNaN(timeRemaining)) {
    console.error("Please enter a valid number");
    return;
  }

  // Clear any previous interval before starting a new one
  clearInterval(countdownInterval);

  // Function to update the text on the screen
  const updateDisplay = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const mm = minutes.toString().padStart(2, "0");
    const ss = remainingSeconds.toString().padStart(2, "0");

    timeHeading.innerText = `Time Remaining: ${mm}:${ss}`;
  };

  // Show the initial time immediately
  updateDisplay(timeRemaining);

  // Start counting down every 1000ms
  countdownInterval = setInterval(() => {
    timeRemaining -= 1;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      playAlarm(); // Calling the function from the section below
      document.body.style.backgroundColor = "red"; // Flash effect
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
