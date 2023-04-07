const img_template =
  '<img class="entry__image" src="./images/artists/${artist.artist_name}.jpg" />';

const renderArtist = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const artist_name = urlParams.get("artist_name");

  const result = await fetch(
    `http://localhost/php/artists/by_name.php?name=${artist_name}`
  );
  const artist = await result.json();

  const image = document.getElementById("artist-image");
  image.setAttribute("src", `./images/artists/${artist.name}.jpg`);

  const description = document.getElementById("description-block");
  const paragraphs = artist.description.split("\n");
  for (const paragraph of paragraphs) {
    description.innerHTML += `<p class="artist__description" id="description">${paragraph}</p>`;
  }

  const songs_result = await fetch(`http://localhost/php/songs/by_artist.php?id=${artist.id}`);
  const songs = await songs_result.json();
  const entries_list = document.getElementById("entries_list");
  songs.forEach((song) => {
    entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${song.artist_name}.jpg" />
      <a class="entry__song">"${song.song_name}"</a>
      <span> - </span>
      <a class="entry__author">${song.artist_name}</a>
      <p class="entry__right_column">${song.song_year}</p>
    </div>`;
  });
};

window.addEventListener("DOMContentLoaded", renderArtist);
