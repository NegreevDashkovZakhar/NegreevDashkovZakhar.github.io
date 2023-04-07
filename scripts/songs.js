import base_url from "./config.js";

const renderSongs = async () => {
  const result = await fetch(`${base_url}/php/songs/all.php`);
  const songs = await result.json();
  const entries_list = document.getElementById("entries_list");
  entries_list.innerHTML = '<p class="list__year">Год песни</p>';

  const searchedValue = document.getElementById("search-input").value;

  songs.forEach((song) => {
    const wasSearched = song.song_name.toUpperCase().includes(searchedValue.toUpperCase());
    if (!wasSearched) {
      return;
    }
    entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${song.artist_name}.jpg" />
      <a class="entry__song" href="${base_url}/song_page.html?id=${song.id}">"${song.song_name}"</a>
      <span> - </span>
      <a class="entry__author" href="${base_url}/artist_page.html?artist_name=${song.artist_name}">
        ${song.artist_name}
      </a>
      <p class="entry__right_column">${song.song_year}</p>
      </div>`;
  });
};

const onLoad = () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click",renderSongs);
  renderSongs();
};

window.addEventListener("DOMContentLoaded", onLoad);
