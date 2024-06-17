const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

router.get('/words', async (req, res) => {
    const { difficulty } = req.query;

    try {
        const words = await Word.find({ rating: difficulty.toUpperCase() });
        res.json(words);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/add-word', async (req, res) => {
    const { word, hint, rating } = req.body;
    const newWord = new Word({ word, hint, rating });

    try {
        const savedWord = await newWord.save();
        res.status(201).json(savedWord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
