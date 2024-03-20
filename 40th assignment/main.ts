interface Album {
    artist: string;
    title: string;
    tracks?: number; // '?' denotes optional property
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(make_album("Ali Zafar", "psl 9"));
  console.log(make_album("Rahat Fateh Ali Khan", "Faraar"));
  console.log(make_album("Adnan Sami", "Listeners", 8));
  