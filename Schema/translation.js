const mongoose = require('mongoose');

const original = new mongoose.Schema({
    oriText: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('original', original);