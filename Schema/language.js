const mongoose = require('mongoose');
const { Schema } = mongoose;
const original = require('./translation')

const lang = new mongoose.Schema({
    langName: {
        type: String,
        required: true
    },
    langTranslate: {
        type: String,
        required: true
    },
    translated: [{
        type: Schema.Types.ObjectId,
        ref: original
    }]
})

module.exports = mongoose.model('Lang', lang)