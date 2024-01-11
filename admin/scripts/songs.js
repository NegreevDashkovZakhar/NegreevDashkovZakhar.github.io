import {base_url} from '../../scripts/config.js';

document.addEventListener('DOMContentLoaded', function () {
  fetchOptions();
  fetchSongs();

  const form = document.getElementById('createForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    create();
  });
});

function fetchOptions() {
  fetch(`${base_url}/chords/all.php`)
    .then((response) => response.json())
    .then((data) => {
      const chords = document.getElementById('chords');
      chords.innerHTML = '';
      data.forEach((chord) => {
        chords.innerHTML += `<option value="${chord.id}">${chord.name}</option>`;
      });
    })
    .catch((error) => console.error('Error fetching chords:', error));

  fetch(`${base_url}/artists/songs_count.php`)
    .then((response) => response.json())
    .then((data) => {
      const artists = document.getElementById('artist');
      artists.innerHTML = '';
      data.forEach((artist) => {
        artists.innerHTML += `<option value="${artist.artist_id}">${artist.artist_name}</option>`;
      });
    })
    .catch((error) => console.error('Error fetching artists:', error));
}

function fetchSongs() {
  fetch(`${base_url}/songs/all.php`)
    .then((response) => response.json())
    .then((data) => {
      populateTable(data);
    })
    .catch((error) => console.error('Error fetching songs:', error));
}

function editSong(songId) {
  const formData = {
    login: localStorage.getItem('login'),
    password: localStorage.getItem('password'),
    name: document.getElementById('createName').value,
    text: document.getElementById('createText').value,
    chords: [...document.getElementById('chords').children].filter((opt) => opt.selected).map((opt) => opt.value),
    artist_id: document.getElementById('artist').value,
    year: document.getElementById('year').value,
  };

  fetch(`${base_url}/songs/update.php`, {
    method: 'UPDATE',
    body: JSON.stringify({
      ...formData,
      id: songId,
    }),
  })
    .then((response) => fetchSongs())
    .catch((error) => console.error('Error fetching song details:', error));
}

function deleteSong(songId) {
  fetch(`${base_url}/songs/delete.php`, {
    method: 'DELETE',
    body: JSON.stringify({
      login: localStorage.getItem('login'),
      password: localStorage.getItem('password'),
      id: songId,
    }),
  })
    .then((data) => {
      fetchSongs();
    })
    .catch((error) => console.error('Error deleting song:', error));
}

function populateTable(songs) {
  songs = songs.sort(function (a, b) {
    return a.id - b.id;
  });

  const tableBody = document.getElementById('songTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  songs.forEach((song) => {
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${song.id}</td>
                    <td>${song.song_name}</td>
                    <td><pre>${song.song_text}</pre></td>
                    <td>${song.artist_name}</td>
                    <td>${song.song_year}</td>
                    <td>
                        <button class="edit-button" data-song-id="${song.id}">Edit</button>
                        <button class="delete-button" data-song-id="${song.id}">Delete</button>
                    </td>`;
  });

  tableBody.addEventListener('mouseup', function (event) {
    const target = event.target;

    if (target.classList.contains('edit-button')) {
      const songId = target.getAttribute('data-song-id');
      editSong(songId);
    }

    if (target.classList.contains('delete-button')) {
      const songId = target.getAttribute('data-song-id');
      deleteSong(songId);
    }
  });
}

const create = () => {
  const formData = {
    login: localStorage.getItem('login'),
    password: localStorage.getItem('password'),
    name: document.getElementById('createName').value,
    text: document.getElementById('createText').value,
    chords: [...document.getElementById('chords').children].filter((opt) => opt.selected).map((opt) => opt.value),
    artist_id: document.getElementById('artist').value,
    year: document.getElementById('year').value,
  };

  fetch(`${base_url}/songs/create.php`, {
    method: 'POST',
    body: JSON.stringify(formData),
  })
    .then((response) => {
      fetchSongs();
    })
    .catch((error) => console.error('Error creating song:', error));
};
