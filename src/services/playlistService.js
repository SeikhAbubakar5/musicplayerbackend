const Playlist = require('../models/Playlist');
const Song = require('../models/song');

const createPlaylist = async (playlistData) => {
    const { name, user, songs } = playlistData;
    console.log("Creating playlist with songs:", songs); // Debugging line
    
    // Ensure the songs array is correctly passed to the model
    const playlist = new Playlist({
        name,
        user,
        songs: songs.length ? songs : [], // Only add songs if the array is not empty
    });

    return await playlist.save();
};

const addSongToPlaylist = async (playlistId, songId) => {
    try {
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            throw new Error('Playlist not found');
        }

        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }

        playlist.songs.push(songId);
        await playlist.save();
        return playlist;
    } catch (error) {
        throw error;
    }
};

const getUserPlaylists = async (userId) => {
    try {
        const playlists = await Playlist.find({ user: userId }).populate('songs');
        return playlists;
    } catch (error) {
        throw error;
    }
};

module.exports = { createPlaylist, addSongToPlaylist, getUserPlaylists };
