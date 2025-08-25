// Store elements in variables
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

// add songs playlist
const songs = [
  {
    title: "Stay with Me",
    artist: "Fara lacrimi",
    src: "songs/Akcent - Stay With Me.mp3",
    cover: "img/stay-with-me-album.jpg",
  },
  {
    title: "Akcent - That's My Name",
    artist: "True Believers",
    src: "songs/Akcent - That's My Name (Ultra Music).mp3",
    cover: "img/that's-my-name-album.jpg",
  },
  {
    title: "Stereo Love",
    artist: "Edward Maya & Vika Jigulina",
    src: "songs/Edward Maya & Vika Jigulina - Stereo Love (Official Music Video).mp3",
    cover: "img/stereo-love-album.jpg",
  },
  {
    title: "Jennifer Lopez - On The Floor",
    artist: "Jennifer Lopez, Pitbull",
    src: "songs/Jennifer Lopez - On The Floor ft. Pitbull.mp3",
    cover: "img/on-the-floor-album.jpg",
  },
];

// SongeIndex initial set zero
let songIndex = 0;
let isPlaying = false;

// Load song
function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

// Play song
function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = "❚❚";
}

// Pause song
function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = "▶";
}

// Toggle play/pause
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

// Next song
function nextSong() {
  songIndex++;
  if (songIndex >= songs.length) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

// Previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Update progress bar
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
  }
});

// Seek
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Auto play next when song ends
audio.addEventListener("ended", nextSong);

// Load initial song
loadSong(songs[songIndex]);
