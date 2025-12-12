// Select Elements
const video = document.querySelector(".player__video");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volumeControl = document.querySelector("input[name='volume']");
const speedControl = document.querySelector("input[name='playbackSpeed']");
const rewindBtn = document.querySelector(".rewind");
const forwardBtn = document.querySelector(".forward");

// PLAY/PAUSE
function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

// Update play button icon
function updateButton() {
  toggle.textContent = video.paused ? "►" : "❚ ❚";
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Volume
function updateVolume() {
  video.volume = this.value;
}

// Speed
function updateSpeed() {
  video.playbackRate = this.value;
}

// Scrub on progress click
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Rewind
function rewind() {
  video.currentTime -= 10;
}

// Forward
function forward() {
  video.currentTime += 25;
}

// Event listeners
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

volumeControl.addEventListener("input", updateVolume);
speedControl.addEventListener("input", updateSpeed);

progress.addEventListener("click", scrub);
rewindBtn.addEventListener("click", rewind);
forwardBtn.addEventListener("click", forward);


