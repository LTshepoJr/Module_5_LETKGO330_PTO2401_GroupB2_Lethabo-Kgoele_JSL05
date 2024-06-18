// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  {
    title: "Me Gustas Tu",
    artist: "Manu Chao",
    genre: "Rock",
  },
  {
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    genre: "Hip-Hop/Rap",
  },
  {
    title: "The Way",
    artist: "Ariana Grande",
    genre: "R&B",
  },
  {
    title: "Seven",
    artist: "Jung Kook",
    genre: "Pop",
  },
  {
    title: "Drunk",
    artist: "ScHoolboy Q",
    genre: "Hip-Hop/Rap",
  },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "Hip-Hop/Rap",
  Rocket: "Hip-Hop/Rap",
  Groot: "R&B",
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here
  const genreRock = songs.filter((genre) => genre.genre === "Rock");
  const genrePop = songs.filter((genre) => genre.genre === "Pop");
  const genreRap = songs.filter((genre) => genre.genre === "Hip-Hop/Rap");
  const genreRnB = songs.filter((genre) => genre.genre === "R&B");
  const guardiansFavGenre = Object.values(guardians);

  const divPlaylist = document.getElementById("playlists");

  const starLordDiv = document.createElement("div");
  const starLord = document.createElement("h2");
  starLordDiv.className = "playlist";
  starLord.textContent = "Star-Lord's Playlist";
  divPlaylist.appendChild(starLordDiv);
  starLordDiv.appendChild(starLord);

  const gamoraDiv = document.createElement("div");
  const gamora = document.createElement("h2");
  gamoraDiv.className = "playlist";
  gamora.textContent = "Gamora's Playlist";
  divPlaylist.appendChild(gamoraDiv);
  gamoraDiv.appendChild(gamora);

  const drax = document.createElement("h2");
  const draxDiv = document.createElement("div");
  draxDiv.className = "playlist";
  drax.textContent = "Drax's Playlist";
  divPlaylist.appendChild(draxDiv);
  draxDiv.appendChild(drax);

  const rocketDiv = document.createElement("div");
  const rocket = document.createElement("h2");
  rocketDiv.className = "playlist";
  rocket.textContent = "Rocket's Playlist";
  divPlaylist.appendChild(rocketDiv);
  rocketDiv.appendChild(rocket);

  const grootDiv = document.createElement("div");
  const groot = document.createElement("h2");
  grootDiv.className = "playlist";
  groot.textContent = "Groot's Playlist";
  divPlaylist.appendChild(grootDiv);
  grootDiv.appendChild(groot);

  for (let i = 0; i < guardiansFavGenre.length; i++) {
    const text = document.createElement("p");
    const songTitle = document.createElement("span");
    text.className = "song";
    songTitle.className = "song-title";

    if (guardians["Star-Lord"] === "Rock") {
      genreRock.forEach((artist) => {
        text.textContent = `Artist: ${artist.artist}; Song: `;
        songTitle.textContent = artist.title;
        starLordDiv.appendChild(text);
        text.appendChild(songTitle);
      });
    }
  }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
