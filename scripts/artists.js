import base_url from './config.js';

const renderArtists = async () => {
  const result = await fetch(`${base_url}/php/artists/songs_count.php`);
  const artists = await result.json();
  const entries_list = document.getElementById("entries_list");
  entries_list.innerHTML = '<p class="list__year">Песен</p>';
  
  const searchedValue = document.getElementById("search-input").value;

  artists.forEach((artist) => {
    const wasSearched = artist.artist_name.toUpperCase().includes(searchedValue.toUpperCase());
    if (!wasSearched) {
      return;
    }
    entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${artist.artist_name}.jpg" />
      <a class="entry__author" href="${base_url}/artist_page.html?artist_name=${artist.artist_name}">
        ${artist.artist_name}
      </a>
      <p class="entry__right_column">${artist.songs_count}</p>
    </div>`;
  });
};

const onLoad = () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click",renderArtists);
  renderArtists();
}

window.addEventListener("DOMContentLoaded", onLoad);
