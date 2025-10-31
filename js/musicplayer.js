
audio.muted = true;
audio.play().then(() => {
  setTimeout(() => audio.muted = false, 2000); // unmute after 2s
});


audio.muted = true;
audio.play().then(() => {
  setTimeout(() => audio.muted = false, 2000); // unmute after 2s
});

// Pause after 8 seconds if needed
setTimeout(() => {
  audio.pause();
}, 8000);


  // Set starting volume to 50%
  audio.volume = .5;