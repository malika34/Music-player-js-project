# 🎵 Music Player

A modern and minimalistic music player built using **HTML, CSS, and JavaScript**.  
This project allows users to play, pause, skip, and navigate through their playlist with an interactive UI and smooth functionality.

---

## 🚀 Features

✅ Play / Pause music with a single button  
✅ Next / Previous navigation for switching songs  
✅ Dynamic Playlist (titles, artists, and album covers change automatically)  
✅ Progress Bar that updates in real-time  
✅ Seek Functionality (drag the slider to jump anywhere in the song)  
✅ Auto-play Next Song when the current track finishes  
✅ Attractive UI with album cover, song info, and smooth design

**📷 Screenshot**
![](/img/ui.png)

## 🛠️ Technologies Used

- **HTML5** → Structure of the player (buttons, image, audio element, etc.)
- **CSS3** → Styling, layout, colors, gradients, and responsiveness
- **JavaScript (Vanilla JS)** → Music controls, events, and playlist management

---

## 📖 How It Works

### 1. Loading Songs

- All songs are stored in a **`songs[]` array** in `script.js`.
- Each song has: `title`, `artist`, `src` (path to mp3), and `cover` (album image).
- The **`loadSong()` function** loads these details into the UI.

### 2. Playing & Pausing

- The **Play button** toggles between ▶ (play) and ❚❚ (pause).
- When clicked:
  - `playSong()` → starts audio playback
  - `pauseSong()` → pauses the song

### 3. Next & Previous Navigation

- `nextSong()` → moves to the next track in the array (loops back to first if last).
- `prevSong()` → moves to the previous track (loops to last if first).

### 4. Progress Bar

- Updates automatically as the song plays (`timeupdate` event).
- Formula: `(currentTime / duration) * 100` → converts into percentage.

### 5. Seeking in Song

- When user drags the slider, `audio.currentTime` updates to jump to that point.

### 6. Auto Play Next Song

- When a song finishes (`ended` event), it automatically calls `nextSong()`.

---

## 🎨 UI Preview

- Circular **album cover** with shadow
- Modern **play/pause/skip controls**
- Pink gradient **background theme**
- Interactive **progress bar slider**

---

## ▶️ Getting Started

1. **Clone the repository** or download the project files:
   ```bash
   git clone https://github.com/malika34/Music-player-js-project.git
   ```
2. Add your music files to the songs/ folder.

- Make sure the src paths in script.js match your file names.

3. Add album covers inside the img/ folder.

- Update their paths in script.js.

4. Open index.html in your browser and enjoy 🎶

🧩 **Future Improvements**

- Add Playlist Menu (click on a title to play that song)

- Add Shuffle & Repeat buttons

- Add Volume Control

- Animate the album cover rotation while playing

✨ Made with ❤️ using HTML, CSS & JavaScript
