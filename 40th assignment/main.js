function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Ali Zafar", "psl 9"));
console.log(make_album("Rahat Fateh Ali Khan", "Faraar"));
console.log(make_album("Adnan Sami", "Listeners", 8));
