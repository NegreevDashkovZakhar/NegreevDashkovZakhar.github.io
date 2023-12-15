import base_url from "./config.js";
import PageCounter from "./pages.js";

let pageCounter = new PageCounter();

let artists = [];

const loadArtists = async () => {
  const result = await fetch(`${base_url}/php/artists/songs_count.php`);
  artists = await result.json();
};

const renderArtists = async () => {
  const entries_list = document.getElementById("entries_list");
  entries_list.innerHTML = '<p class="list__year">Песен</p>';

  const searchedValue = document.getElementById("search-input").value;
  const pageSize = pageCounter.pageSize;
  const pageStart = pageSize * (pageCounter.currentValue - 1);
  const pageEnd = pageSize * pageCounter.currentValue;
  let currentRecord = 0;
  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const wasSearched = artist.artist_name
      .toUpperCase()
      .includes(searchedValue.toUpperCase());
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
      <img class="entry__image" src="./images/artists/${artist.artist_name}.jpg" alt="artist image" />
      <a class="entry__author" href="${base_url}/artist_page.html?artist_name=${artist.artist_name}">
        ${artist.artist_name}
      </a>
      <p class="entry__right_column">${artist.songs_count}</p>
    </div>`;
  }

  pageCounter.render();
  const decrementButton = document.getElementById("page-decrement");
  decrementButton.addEventListener("click", decrementPage);
  const incrementButton = document.getElementById("page-increment");
  incrementButton.addEventListener("click", incrementPage);
};

const decrementPage = () => {
  if (pageCounter.currentValue <= 1) {
    return;
  }

  pageCounter.currentValue -= 1;
  renderArtists();
};

const incrementPage = () => {
  if (pageCounter.currentValue >= artists.length / pageCounter.pageSize) {
    return;
  }

  pageCounter.currentValue += 1;
  renderArtists();
};

const onLoad = async () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", renderArtists);
  await loadArtists();
  renderArtists();
};

window.addEventListener("DOMContentLoaded", onLoad);
