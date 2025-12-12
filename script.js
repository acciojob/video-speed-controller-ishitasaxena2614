// Select Elements
const video = document.querySelector("video");
const toggle = document.querySelector(".player__button");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volumeControl = document.querySelector("input[name='volume']");
const speedControl = document.querySelector("input[name='playbackSpeed']");
const rewindBtn = document.querySelector(".rewind");
const forwardBtn = document.querySelector(".forward");

// PLAY / PAUSE TOGGLE
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// UPDATE PLAY/PAUSE BUTTON  
function updateButton() {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

// UPDATE PROGRESS BAR  
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// CONTROL VOLUME  
function updateVolume() {
  video.volume = this.value;
}

// CONTROL SPEED  
function updateSpeed() {
  video.playbackRate = this.value;
}

// CLICK ON PROGRESS BAR TO SEEK  
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// REWIND 10 SECONDS  
function rewind() {
  video.currentTime -= 10;
}

// FORWARD 25 SECONDS  
function forward() {
  video.currentTime += 25;
}

// Event Listeners
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

