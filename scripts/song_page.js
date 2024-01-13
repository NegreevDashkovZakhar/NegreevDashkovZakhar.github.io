import {base_url} from './config.js';

const renderSong = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const song_id = urlParams.get('id');

  const result = await fetch(`${base_url}/songs/by_id.php?id=${song_id}`);
  const song = await result.json();

  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = `Аккорды к песне ${song.song_name} исполнителя ${song.artist_name}. Научитесь играть любимую музыку!`;
  document.getElementsByTagName('head')[0].appendChild(metaDescription);

  const metaKeyword = document.createElement('meta');
  metaKeyword.name = 'keywords';
  metaKeyword.content = `Аккорды, ${song.song_name}, ${song.artist_name}, Гитара, Игра на гитаре, Аккорды к песне ${song.song_name}, Аккорды ${song.artist_name}, Песни для новичков`;
  document.getElementsByTagName('head')[0].appendChild(metaKeyword);

  const title = document.createElement('title');
  title.innerText = `${song.song_name} - ${song.artist_name}`;
  document.getElementsByTagName('head')[0].appendChild(title);

  const songTitle = document.getElementById('song-title');
  songTitle.innerText = `${song.song_name} - ${song.artist_name}`;

  const songText = document.getElementById('song-text');
  songText.innerText = song.song_text;

  const chordsResult = await fetch(`${base_url}/songs/chords.php?id=${song_id}`);
  const chords = await chordsResult.json();
  const songChords = document.getElementById('song-chords');
  for (const chord of chords) {
    songChords.innerHTML += `
  <img src="./images/chords/${chord.fileName}" class="song__chord" alt="${chord.fileName} chord" />
  `;
  }
};

window.addEventListener('DOMContentLoaded', renderSong);
