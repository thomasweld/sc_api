// Card Template
function card (track) {

  if (track.artwork_url === null){
    track.artwork_url = 'http://placehold.it/100x100';
  }

  return `
    <li class="card" data-stream="${track.stream_url}">

      <img src='${track.artwork_url}' class="album_art"/>

      <div class="content">
        <div class="song_name">${track.title}</div>
        <div class="artist_name">${track.user.username}</div>
      </div>

    </li>
  `;
}

export default card;
