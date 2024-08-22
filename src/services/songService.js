const Song = require('../models/song');

const createSong = async (songData) => {
    const song = new Song(songData);
    return await song.save();
};

const getAllSongs = async () => {
    return await Song.find();
};

const getSongById = async (id) => {
    return await Song.findById(id);
};

module.exports = {
    createSong,
    getAllSongs,
    getSongById,
};
