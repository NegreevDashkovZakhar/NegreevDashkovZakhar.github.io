import base_url from "./config.js";

const renderArtist = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const song_id = urlParams.get("id");

  const result = await fetch(`${base_url}/songs/by_id.php?id=${song_id}`);
  const song = await result.json();
  console.log(song);

  const songTitle = document.getElementById("song-title");
  songTitle.innerText = `${song.song_name} - ${song.artist_name}`;

  const songText = document.getElementById("song-text");
  songText.innerText = song.song_text;

  const chordsResult = await fetch(
    `${base_url}/songs/chords.php?id=${song_id}`
  );
  const chords = await chordsResult.json();
  console.log(chords);
  const songChords = document.getElementById("song-chords");
  for (const chord of chords) {
    songChords.innerHTML += `
  <img src="./images/chords/${chord.fileName}" class="song__chord" alt="${chord.fileName} chord" />
  `;
  }
};

window.addEventListener("DOMContentLoaded", renderArtist);
