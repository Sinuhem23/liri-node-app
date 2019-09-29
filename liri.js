require('dotenv').config();

// require the key.js file
var keys = require('./keys.js');
// require spotify
var Spotify = require('node-spotify-api');
//  save key to var
var spotify = new Spotify(keys.spotify);
 

var fs = require ('fs');
// grabs search command line argument
var liriCommands = process.argv[2];
// Joining the remaining arguments (incase name or show is multiple words)
var inputSearch = process.argv.slice(3).join(" ");


switch (liriCommands) {
    case 'spotify-this-song':
//  name of function (spotify)
    getMeSpotify(inputSearch);
    break;

    default:
    console.log("Liri can not do that yet.");

}
function getArtistName(artist) {
    return artist.name
}

// Spotify search
function getMeSpotify(inputSearch) {

    spotify.search({ type: 'track', query: inputSearch }, function(err, data) {

        if(err) {
            return console.log('Error occurred: ' + err);
        }

        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            var albumObject = songs[i].album;
            var trackName = songs[i].name;
            var preview = songs[i].preview_url;

// store artists array to vars
            console.log(i);
            console.log('\nartist(s): ' + songs[i].artists.map(getArtistName));
            console.log('\nsong name: ' + trackName);
            console.log('\npreview song: ' + preview);
            console.log('\nalbum name: ' + albumObject.name);
            console.log('\n');
            console.log('/////////////////////////////////////////////////////////////////////////////////////');
            console.log('\n');

           
            
        }
    });
}
