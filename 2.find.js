// [].find()

// What are we building ?
// MUSIC PLAYLIST APP

const songs = [
    {
        song_name: `The Offspring - The Kids Aren't Alright 🤘`,
        youtube_link: '🎧 https://www.youtube.com/watch?v=7iNbnineUCI',
        category: 'punk'
    },
    {
        song_name: `Coolio - Gangsta's Paradise 👦`,
        youtube_link: '🎧https://www.youtube.com/watch?v=fPO76Jlnz6c',
        category: 'hip-hop'
    },
    {
        song_name: `The Weeknd - Blinding Lights 🎹`,
        youtube_link: '🎧 https://www.youtube.com/watch?v=4NRXx6U8ABQ',
        category: 'pop'
    },
    {
        song_name: `a-ha - Take On Me 👾`,
        youtube_link: '🎧 https://www.youtube.com/watch?v=djV11Xbc914',
        category: 'retro'
    },

    {
        song_name: `Kiss - I Was Made For Lovin' You 🤟`,
        youtube_link: '🎧 https://www.youtube.com/watch?v=ZhIsAZO5gl0',
        category: 'rock'
    }
]

// Let's see if our songs array is correct
console.log(
    songs
)

// How do we find a song to play it ? 🥺
// We can search through our array like this 👇

let song_to_play = null

const which_song_1 = `Kiss - I Was Made For Lovin' You 🤟`
const which_song_2 = `a-ha - Take On Me 👾`
const which_song_3 = `The Weeknd - Blinding Lights 🎹`

for ( const song of songs ) {
    if ( song.song_name === which_song_1 ) {
        song_to_play = song
        break
    }
}

if ( song_to_play ) {
    playSong( song_to_play )
}

console.log( '=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

// For demonstration purposes,  
// we asume this function will open an audio player

function playSong( song ) {
    console.log(
        `🔊 Playing song: ${ song.song_name } ` +
            ` from this link: ${ song.youtube_link } ...`
    )
}

// ⬆️ This is the bad way
// Let me show you a great way ⤵️

playSong( 
    songs.find(song => song.song_name === which_song_1 )
)

playSong( 
    songs.find(({ song_name }) => song_name === which_song_2 )
)

playSong( 
    songs.find(({ song_name }) => song_name === which_song_3 )
)

console.log( '=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

// How about making it even better ?
// Let's do it! 🔈 🔉 🔊

[
    which_song_3,
    which_song_2,
    which_song_1
].forEach( which_song => {
    const searchSongFn = ({ song_name }) => song_name === which_song

    playSong( 
        songs.find( searchSongFn )
    )
})
