import {base_url, site_url} from '../../scripts/config.js';

async function login() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const result = await fetch(`${base_url}/login.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({login, password}),
  });
  if (result.status == 200) {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    window.location = `${site_url}/admin/artists.html`;
  } else {
    alert('Неверный логин или пароль');
  }
}

function onLoad() {
  document.getElementById('sumbit').addEventListener('click', login);
}

window.addEventListener('DOMContentLoaded', onLoad);
