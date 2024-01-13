import {base_url, site_url} from './config.js';

const renderArtist = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const artist_name = urlParams.get('artist_name');

  const result = await fetch(`${base_url}/artists/by_name.php?name=${artist_name}`);
  const artist = await result.json();

  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = `Вся информация о песнях, биографии исполнителя ${artist.name}. А также аккорды к песням!`;
  document.getElementsByTagName('head')[0].appendChild(metaDescription);

  const metaKeyword = document.createElement('meta');
  metaKeyword.name = 'keywords';
  metaKeyword.content = `Аккорды, ${artist.name}, Музыка ${artist.name}, Гитара, Игра на гитаре, Музыкальные группы, Музыкальные исполнители, Аккорды ${artist.name}, Песни для новичков`;
  document.getElementsByTagName('head')[0].appendChild(metaKeyword);

  const title = document.createElement('title');
  title.innerText = `${artist.name}`;
  document.getElementsByTagName('head')[0].appendChild(title);

  const image = document.getElementById('artist-image');
  image.setAttribute('src', `./images/artists/${artist.name}.jpg`);

  const artistName = document.getElementById('artist-name');
  artistName.innerText = artist.name;

  const description = document.getElementById('description-block');
  const paragraphs = artist.description.split('\n');
  for (const paragraph of paragraphs) {
    description.innerHTML += `<p class="artist__description" id="description">${paragraph}</p>`;
  }

  const songs_result = await fetch(`${base_url}/songs/by_artist.php?id=${artist.id}`);
  const songs = await songs_result.json();
  const entries_list = document.getElementById('entries_list');
  songs.forEach((song) => {
    entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${song.artist_name}.jpg" alt="artist image" onerror="this.src='images/icons/guitar.svg';" />
      <a class="entry__song" href="${site_url}/song_page.html?id=${song.id}">"${song.song_name}"</a>
      <span> - </span>
      <a class="entry__author">${song.artist_name}</a>
      <p class="entry__right_column">${song.song_year}</p>
    </div>`;
  });
};

window.addEventListener('DOMContentLoaded', renderArtist);
