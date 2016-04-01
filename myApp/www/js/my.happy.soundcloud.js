/* ACCESSING A SOUNDCLOUD PLAYLIST AND TARGETING THE TRACKS*/
var tracks = [];
var playedSounds = [];
var currentTrack;

$(document).ready(function() {
  
    SC.initialize({
      client_id: '011f459dffafe1e481d9a287a17656cd'
    });

    SC.get('/playlists/208313211?client_id=011f459dffafe1e481d9a287a17656cd').then(function(playlists) { 
        // var tracks = [];


        $(playlists).each(function(index, playlist) {

                $(playlist.tracks).each(function(i, track) {
                    var trackURL = (track.permalink_url);
                    tracks[i] = trackURL;

                });
        }); 

        playSounds();

    });
});

function hasPlayed(sound){

    if (playedSounds.length == tracks.length) {

        // We've played all of the sounds. Reset and start again.
        playedSounds = [];
        playedSounds.push(sound);
        return false;

    }

  // We haven't played all the sounds yet but check to see whether we've played the current one.
    for (var i = 0; i < playedSounds.length; i++)
        if (playedSounds[i] == sound)
            return true;

    // Note that we've now played this sound.
    playedSounds.push(sound);
    return false;

}

function playSounds() {

    var index = Math.floor(Math.random() * (tracks.length));

    // Loop until we've found a sound that we've not yet played.
    while (hasPlayed(index)) {

        index = Math.floor(Math.random() * (tracks.length));

    }
        SC.oEmbed(tracks[index],  { 
          auto_play: true,    
          iframe: true,  
          enable_api: true,  
          randomize: true, 
          element: document.getElementById('player')
     });

    console.log(tracks[index]);


    // $("#player").html("<embed src=\"" + tracks[index] + "\" hidden=\"true\" autostart=\"true\" />");

}
