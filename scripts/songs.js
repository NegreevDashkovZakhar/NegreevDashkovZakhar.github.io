import {base_url, site_url} from './config.js';
import PageCounter from './pages.js';

let pageCounter = new PageCounter();

let songs = [];

const loadSongs = async () => {
  const result = await fetch(`${base_url}/songs/all.php`);
  songs = await result.json();
};

const renderSongs = async () => {
  const entries_list = document.getElementById('entries_list');
  entries_list.innerHTML = '<p class="list__year">Год песни</p>';

  const searchedValue = document.getElementById('search-input').value;
  const pageSize = pageCounter.pageSize;
  const pageStart = pageSize * (pageCounter.currentValue - 1);
  const pageEnd = pageSize * pageCounter.currentValue;
  let currentRecord = 0;
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    const wasSearched = song.song_name.toUpperCase().includes(searchedValue.toUpperCase());
    if (!wasSearched) {
      continue;
    }
    currentRecord += 1;

    if (currentRecord <= pageStart) {
      continue;
    }

    if (currentRecord > pageEnd) {
      break;
    }

    entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${song.artist_name}.jpg" alt="artist image" onerror="this.src='images/icons/guitar.svg';" />
      <a class="entry__song" href="${site_url}/song_page.html?id=${song.id}">"${song.song_name}"</a>
      <span> - </span>
      <a class="entry__author" href="${site_url}/artist_page.html?artist_name=${song.artist_name}">
        ${song.artist_name}
      </a>
      <p class="entry__right_column">${song.song_year}</p>
      </div>`;
  }

  pageCounter.render();
  const decrementButton = document.getElementById('page-decrement');
  decrementButton.addEventListener('click', decrementPage);
  const incrementButton = document.getElementById('page-increment');
  incrementButton.addEventListener('click', incrementPage);
};

const decrementPage = () => {
  if (pageCounter.currentValue <= 1) {
    return;
  }

  pageCounter.currentValue -= 1;
  renderSongs();
};

const incrementPage = () => {
  if (pageCounter.currentValue >= songs.length / pageCounter.pageSize) {
    return;
  }

  pageCounter.currentValue += 1;
  renderSongs();
};

const onLoad = async () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', renderSongs);
  await loadSongs();
  renderSongs();
};

window.addEventListener('DOMContentLoaded', onLoad);
