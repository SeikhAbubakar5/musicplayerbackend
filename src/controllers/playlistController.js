const playlistService = require("../services/playlistService");

const createPlaylist = async (req, res) => {
    try {
        const playlist = await playlistService.createPlaylist(req.user.id, req.body.name);
        res.status(201).json(playlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addSongToPlaylist = async (req, res) => {
    try {
        const playlist = await playlistService.addSongToPlaylist(req.params.id, req.body.songId);
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getPlaylists = async (req, res) => {
    try {
        const userId = req.user.id;
        // console.log("Fetching playlists for user:", userId);

        const playlists = await playlistService.getUserPlaylists(userId);
        // console.log("Playlists found:", playlists);

        res.status(200).json(playlists);
    } catch (error) {
        // console.error("Error fetching playlists:", error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPlaylist, addSongToPlaylist, getPlaylists };
