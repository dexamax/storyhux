const video = document.getElementById('myVideo');
const playButton = document.getElementById('customPlayButton');

playButton.addEventListener('click', function() {
    video.play();
});

video.addEventListener('play', function() {
    playButton.style.display = 'none';
});

video.addEventListener('pause', function() {
    playButton.style.display = 'block';
});

video.addEventListener('ended', function() {
    playButton.style.display = 'block';
});
