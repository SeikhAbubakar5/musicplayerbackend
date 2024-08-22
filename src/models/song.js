const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true, // Path to the song file
    },
    duration: {
        type: Number, // Duration in seconds
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);
