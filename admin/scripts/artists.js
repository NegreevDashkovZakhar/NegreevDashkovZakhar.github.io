import {base_url} from '../../scripts/config.js';

function create() {
  const formData = {
    login: localStorage.getItem('login'),
    password: localStorage.getItem('password'),
    name: document.getElementById('createName').value,
    description: document.getElementById('createDescription').value,
  };

  fetch(`${base_url}/artists/create.php`, {
    method: 'POST',
    body: JSON.stringify(formData),
  }).catch((error) => console.error('Error creating artist:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  fetchArtists();
  const form = document.getElementById('createForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    create();
  });
});

function fetchArtists() {
  fetch(`${base_url}/artists/songs_count.php`)
    .then((response) => response.json())
    .then((data) => {
      populateTable(data);
    })
    .catch((error) => console.error('Error fetching artists:', error));
}

function editArtist(artistId) {
  const description = document.getElementById('createDescription').value;
  const name = document.getElementById('createName').value;
  fetch(`${base_url}/artists/update.php`, {
    method: 'UPDATE',
    body: JSON.stringify({
      login: localStorage.getItem('login'),
      password: localStorage.getItem('password'),
      name: name.length > 0 ? name : undefined,
      description: description.length > 0 ? description : undefined,
      id: artistId,
    }),
  })
    .then((response) => fetchArtists())
    .catch((error) => console.error('Error fetching artist details:', error));
}

function deleteArtist(artistId) {
  fetch(`${base_url}/artists/delete.php`, {
    method: 'DELETE',
    body: JSON.stringify({
      login: localStorage.getItem('login'),
      password: localStorage.getItem('password'),
      id: artistId,
    }),
  })
    .then((data) => {
      fetchArtists();
    })
    .catch((error) => console.error('Error deleting artist:', error));
}

function populateTable(artists) {
  artists = artists.sort(function (a, b) {
    return a.artist_id - b.artist_id;
  });

  const tableBody = document.getElementById('artistTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  artists.forEach((artist) => {
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${artist.artist_id}</td>
                          <td>${artist.artist_name}</td>
                          <td>${artist.artist_description}</td>
                          <td>
                              <button class="edit-button" data-artist-id="${artist.artist_id}">Edit</button>
                              <button class="delete-button" data-artist-id="${artist.artist_id}">Delete</button>
                          </td>`;
  });

  tableBody.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('edit-button')) {
      const artistId = target.getAttribute('data-artist-id');
      editArtist(artistId);
    }

    if (target.classList.contains('delete-button')) {
      const artistId = target.getAttribute('data-artist-id');
      deleteArtist(artistId);
    }
  });
}
