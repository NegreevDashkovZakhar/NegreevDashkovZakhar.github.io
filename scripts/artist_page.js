const renderArtist = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const artist_name = urlParams.get('artist_name');
    
    const result = await fetch(`http://localhost/php/artists/by_name.php?name=${artist_name}`);
    const artist = await result.json();
    console.log(artist);
    const description = document.getElementById('description');
    description.textContent=artist.description;
}

window.addEventListener('DOMContentLoaded',renderArtist);