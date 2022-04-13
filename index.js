const video = document.querySelector('video');


const playButton = document.getElementById('play');

const playWrapper = document.querySelector('.play-wrapper')

playButton.addEventListener('click', function(){
  togglePlay();
} );

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    playWrapper.style.display = 'none';
  } else {
    video.pause();
  }
}

var promise = video.play();

if (promise !== undefined) {
    promise.catch(error => {
        // Auto-play was prevented
        // Show a UI element to let the user manually start playback

        playWrapper.style.display = 'flex';
        console.log("No autoplay");
      
    }).then(() => {
      console.log("autoplay enabled");
        // Auto-play started
    });
}