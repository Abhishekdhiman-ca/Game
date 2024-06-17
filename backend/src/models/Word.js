const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    word: { type: String, required: true, maxlength: 15 },
    hint: { type: String, required: true },
    rating: { type: String, required: true, enum: ['EASY', 'MEDIUM', 'DIFFICULT'] }
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
