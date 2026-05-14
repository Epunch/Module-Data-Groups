const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Select elements
const image = document.querySelector("#carousel-img");

const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");

const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackwardBtn = document.querySelector("#auto-backward");

const stopBtn = document.querySelector("#stop");
const delayInput = document.querySelector("#delay-input");

// Current image index
let currentIndex = 0;

// Interval variable
let intervalId;

// Show image function
function showImage() {
  image.src = images[currentIndex];
}

// Forward button
forwardBtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();
});

// Backward button
backwardBtn.addEventListener("click", function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage();
});

// Disable auto buttons
function disableAutoButtons() {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

// Enable auto buttons
function enableAutoButtons() {
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

// Auto forward
autoForwardBtn.addEventListener("click", function () {
  disableAutoButtons();
  const delay = Number(delayInput.value);

  intervalId = setInterval(function () {
    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    showImage();
  }, delay);
});

// Auto backward
autoBackwardBtn.addEventListener("click", function () {
  disableAutoButtons();
  const delay = Number(delayInput.value);

  intervalId = setInterval(function () {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    showImage();
  }, delay);
});

// Stop button
stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);

  enableAutoButtons();
});
