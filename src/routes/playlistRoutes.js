const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');
const authToken = require('../middleware/authToken');

// Create a playlist
router.post('/', authToken, playlistController.createPlaylist);

// Add song to playlist
router.put('/:id/add-song', authToken, playlistController.addSongToPlaylist);

// Get all playlists of a user
router.get('/', authToken, playlistController.getPlaylists);

module.exports = router;
