const renderArtists = async () => {
    const result = await fetch('http://localhost/php/songs/all.php');
    const songs = await result.json();
    const entries_list = document.getElementById('entries_list');
    songs.forEach(song => {
      entries_list.innerHTML += `<div class="list__entry">
      <img class="entry__image" src="./images/artists/${song.artist_name}.jpg" />
      <a class="entry__song">"${song.song_name}"</a>
      <span> - </span>
      <a class="entry__author">${song.artist_name}</a>
      <p class="entry__year">${song.song_year}</p>
    </div>`
    });
}

window.addEventListener('DOMContentLoaded',renderArtists);