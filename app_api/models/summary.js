const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
    name: String,
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    published: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

mongoose.model('Summary', summarySchema,'summary');

