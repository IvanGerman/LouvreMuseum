const playerWrapper = document.querySelector('.player-wrapper');
const video = playerWrapper.querySelector('.viewer');
const playProgress = playerWrapper.querySelector('.play-progress');
const playProgressBar = playerWrapper.querySelector('.play-progress-filled');
const toggleBtn = playerWrapper.querySelector('.toggle');
const skipBtns = playerWrapper.querySelectorAll('[data-skip]');
const sliders = playerWrapper.querySelectorAll('.player-slider');
const toggleBtnImage = playerWrapper.querySelector('.toggleBtn');
const volumenSlider = playerWrapper.querySelector('.volumen-slider');
const videoPlayButton = document.querySelector('.video-play-button');
const videoVolumenButton = document.querySelector('.video-controls-volume-button');
const fullScreenIcon = document.querySelector('.fullScreenIcon');


//--------------------------------------------------------------------------------------------------------

function changePlayMode() {
  const videoMode = video.paused ? 'play' : 'pause';
  video[videoMode]();
};

function updateToggleBtn() { 

  if ( this.paused ) {   
    toggleBtnImage.src = "./assets/svg/video-player-svg/VideoToggleBtn.svg";
    videoPlayButton.style.visibility = 'visible';

  };
  if ( !this.paused ) {  
    toggleBtnImage.src = "./assets/svg/video-player-svg/pause-24.png"; 
    videoPlayButton.style.visibility = 'hidden';
  };
};

function updateSlider() {
  video[this.name] = this.value;
};

function updatePlayProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  playProgressBar.style.flexBasis = `${percent}%`;
};

function jump(event) {
  const jumpTime = (event.offsetX / playProgress.offsetWidth) * video.duration;
  video.currentTime = jumpTime;
};

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
;}

function toggleVolume() {
  if ( video.muted ) {
    video.muted = false; 
    videoVolumenButton.style.backgroundImage = 'url("./assets/svg/video-player-svg/VolumeONicon.svg")';
    return;
  };
  video.muted = true;
  videoVolumenButton.style.backgroundImage = 'url("./assets/svg/video-player-svg/VolumeOFFicon.svg")';
}

function setFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  };
}
//--------------------------------------------------------------------------------------------------------

video.addEventListener('click', changePlayMode);
video.addEventListener('play', updateToggleBtn);
video.addEventListener('pause', updateToggleBtn);
video.addEventListener('timeupdate', updatePlayProgressBar);

videoPlayButton.addEventListener('click', changePlayMode);
videoVolumenButton.addEventListener('click', toggleVolume);
fullScreenIcon.addEventListener('click', setFullScreen);


toggleBtn.addEventListener('click', changePlayMode);
skipBtns.forEach(button => button.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', updateSlider));
sliders.forEach(slider => slider.addEventListener('mousemove', updateSlider));

let mousedown = false;

playProgress.addEventListener('click', jump);
playProgress.addEventListener('mousemove', (event) => mousedown && jump(event));
playProgress.addEventListener('mousedown', () => mousedown = true);
playProgress.addEventListener('mouseup', () => mousedown = false);


//-------------------------------------------------------------------------------------------------

//eventlisteners for tastature keys:
// f - fullscreen on/off
// space - pause/play
// m - muted/unmuted
// shift + - faster play
// shift - - slower play

document.addEventListener('keydown', function(event) {

  //Space Bar------------------------------------------

  if ( event.code == 'Space' && video.paused ) {
    video.play();
    return;
  };
  
  if ( event.code == 'Space' && !video.paused ) {
    video.pause();
  };

  //Key M-----------------------------------------------
  
  if ( event.code == 'KeyM' ) {
    if ( video.muted ) {
      video.muted = false; return;
    };
    video.muted = true;
  };
  
  //Key F-----------------------------------------------

  if (event.code == 'KeyF') {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    };
  };

  //Key + -----------------------------------------------

  if (event.code == 'Equal') {
    if ( video.playbackRate > 1.9 ) { return; };
    video.playbackRate += 0.1;
  };

  //Key - -----------------------------------------------

  if (event.code == 'Minus') {
    if ( video.playbackRate < 0.6 ) { return; };
    video.playbackRate -= 0.1;
  };


  // Extra added functional keys:
  // b - change background color
  // j - skip 10 seconds forward
  // l - skip 10 seconds back
  // Home - skip to the start of video
  // End - skip to the end of video
  

  //Key B -----------------------------------------------

  if ( event.code == 'KeyB' ) { 

    if ( document.body.style.backgroundColor == 'rgb(190, 180, 180)' ) {
      document.body.style.backgroundColor = 'rgb(0, 0, 0)';
      return;
    };

    document.body.style.backgroundColor = 'rgb(190, 180, 180)'; 
  };

  //Key J -----------------------------------------------
   
  if ( event.code == 'KeyJ' ) { 
    
    video.currentTime += 10;
  };
  
  //Key L -----------------------------------------------
   
  if ( event.code == 'KeyL' ) { 
    
    video.currentTime -= 10;
  };

  //Key Home -----------------------------------------------
   
  if ( event.code == 'Home' ) { 
    
    video.currentTime = 0;
    video.play();
  };

  //Key End -----------------------------------------------
   
  if ( event.code == 'End' ) { 
    
    video.currentTime = video.duration;
  };
});





volumenSlider.addEventListener('change', changeIcon)
function changeIcon() {
  if (volumenSlider.value == 0) {
    videoVolumenButton.style.backgroundImage = 'url("./assets/svg/video-player-svg/VolumeOFFicon.svg")';
    return;
  };
  videoVolumenButton.style.backgroundImage = 'url("./assets/svg/video-player-svg/VolumeONicon.svg")';

};