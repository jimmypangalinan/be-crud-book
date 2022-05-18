const express = require('express')

// model / collections
const Book = require('../models/index.model')

const router = express.Router();


// get data
router.get('/', (req, res) => {
    Book.find({}, (err, books) => {
        res.json(books)
    })
})

// add data
router.post('/', (req, res) => {
    book = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn
    })
    book.save(() => {
        res.status(201).json({
            book,
            status: "Success",
            message: "Successfully added book"
        })
    })
})

// update data
router.put('/:id', async (req, res) => {
    book = await Book.findById(req.params.id)
    book.title = req.body.title;
    book.author = req.body.author;
    book.isbn = req.body.isbn;
    book.save(() => {
        res.json(book)
    })
})

// delete data
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err) => {
        res.json({
            'message':'deleted'
        })
    })
})

module.exports = router