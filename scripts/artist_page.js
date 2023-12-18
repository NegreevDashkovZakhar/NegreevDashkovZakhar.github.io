import base_url from "./config.js";

const renderArtist = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const artist_name = urlParams.get("artist_name");

  const result = await fetch(
    `${base_url}/artists/by_name.php?name=${artist_name}`
  );
  const artist = await result.json();

  const image = document.getElementById("artist-image");
  image.setAttribute("src", `./images/artists/${artist.name}.jpg`);

  const artistName = document.getElementById("artist-name");
  artistName.innerText=artist.name;

  const description = document.getElementById("description-block");
  const paragraphs = artist.description.split("\n");
  for (const paragraph of paragraphs) {
    description.innerHTML += `<p class="artist__description" id="description">${paragraph}</p>`;
  }

  const songs_result = await fetch(`${base_url}/songs/by_artist.php?id=${artist.id}`);
  const songs = await songs_result.json();
  const entries_list = document.getElementById("entries_list");
  songs.forEach((song) => {
    entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${song.artist_name}.jpg" alt="artist image" onerror="this.src='images/icons/guitar.svg';" />
      <a class="entry__song" href="${base_url}/song_page.html?id=${song.id}">"${song.song_name}"</a>
      <span> - </span>
      <a class="entry__author">${song.artist_name}</a>
      <p class="entry__right_column">${song.song_year}</p>
    </div>`;
  });
};

window.addEventListener("DOMContentLoaded", renderArtist);
