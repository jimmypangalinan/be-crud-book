const mongoose = require('mongoose');
const Schema = mongoose.Schema

newSchema = new Schema ({
    title: String,
    author: String,
    isbn: Number
});

module.exports = mongoose.model('Book', newSchema);