const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');
const authToken = require('../middleware/authToken');

// Get all songs
router.get('/', authToken, songController.getAllSongs);

// Get a song by ID
router.get('/:id', authToken, songController.getSongById);

// Create a new song
router.post('/', authToken, songController.createSong);

module.exports = router;
