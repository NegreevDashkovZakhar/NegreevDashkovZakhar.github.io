import base_url from "./config.js";

const renderSongs = async () => {
    const result = await fetch(`${base_url}/php/songs/all.php`);
    const songs = await result.json();
    const entries_list = document.getElementById('entries_list');
    songs.forEach(song => {
      entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${song.artist_name}.jpg" />
      <a class="entry__song">"${song.song_name}"</a>
      <span> - </span>
      <a class="entry__author" href="${base_url}/artist_page.html?artist_name=${song.artist_name}">
        ${song.artist_name}
      </a>
      <p class="entry__right_column">${song.song_year}</p>
    </div>`
    });
}

window.addEventListener('DOMContentLoaded',renderSongs);