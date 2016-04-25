// Card Template
function card (track) {
  return `
    <div class="card">

      <img src='${track.artwork_url}' class="album_art"/>



      <div class="content">
        <div class="song_name">${track.title}</div>
        <div class="artist_name">${track.user.username}</div>
      </div>

    </div>

  `;
}

export default card;
