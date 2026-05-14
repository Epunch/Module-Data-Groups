const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const imgElement = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackwardBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");
const delayInput = document.querySelector("#delay-input");

let currentIndex = 0;
let intervalId = null;

function updateImage() {
  // Check if imgElement exists before setting its source
  if (imgElement) {
    imgElement.src = images[currentIndex];
  }
}

function nextImage() {
  // Move to next index and wrap around to 0 if at the end
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  // Move to previous index and wrap around to the end if at the start
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// Add event listeners for manual navigation buttons
if (forwardBtn) {
  forwardBtn.addEventListener("click", nextImage);
}
if (backwardBtn) {
  backwardBtn.addEventListener("click", prevImage);
}

function startAutoSlideshow(isForward) {
  // Clear any existing interval to prevent overlapping timers
  clearInterval(intervalId);

  // Get delay from input or use 2000ms as default
  const delay = delayInput ? (parseInt(delayInput.value) || 2000) : 2000;

  // Disable auto buttons during the slideshow
  if (autoForwardBtn) autoForwardBtn.disabled = true;
  if (autoBackwardBtn) autoBackwardBtn.disabled = true;

  intervalId = setInterval(() => {
    isForward ? nextImage() : prevImage();
  }, delay);
}

// Add event listeners for automatic slideshow buttons
if (autoForwardBtn) {
  autoForwardBtn.addEventListener("click", () => startAutoSlideshow(true));
}
if (autoBackwardBtn) {
  autoBackwardBtn.addEventListener("click", () => startAutoSlideshow(false));
}

if (stopBtn) {
  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    // Re-enable auto buttons when stopping
    if (autoForwardBtn) autoForwardBtn.disabled = false;
    if (autoBackwardBtn) autoBackwardBtn.disabled = false;
  });
}

// Initialize the first image on load
updateImage();