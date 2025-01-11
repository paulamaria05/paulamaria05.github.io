// Reference to the form and song list
const songForm = document.getElementById('songForm');
const songList = document.getElementById('songList');

// Save song to local storage
function saveSong(songName, feeling) {
    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songs.push({ songName, feeling });
    localStorage.setItem('songs', JSON.stringify(songs));
}

// Display songs from local storage
function displaySongs() {
    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songList.innerHTML = '';
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `<strong>${song.songName}</strong>: ${song.feeling}`;
        songList.appendChild(listItem);
    });
}

// Handle form submission
songForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const songName = document.getElementById('songName').value;
    const feeling = document.getElementById('feeling').value;

    // Save the song and update the list
    saveSong(songName, feeling);
    displaySongs();

    // Clear the form inputs
    songForm.reset();
});

// Display songs on page load
displaySongs();
