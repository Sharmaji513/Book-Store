const express = require('express');
const userAuth = require('../middleware/userAuth');
const Book = require('../models/book');
const router = express.Router();

// Get all books 
router.get('/books', userAuth, async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new book 
router.post('/books', userAuth, async (req, res) => {
  const { title, author, publishedYear, genre } = req.body;

  if (!title || !author || !publishedYear || !genre) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const book = new Book({ title, author, publishedYear, genre });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific book by ID 
router.get('/books/:id', userAuth, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a book by ID 
router.put('/books/:id', userAuth, async (req, res) => {
  const { title, author, publishedYear, genre } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, publishedYear, genre },
      { new: true } 
    );

    if (!book) {
      console.log("Book not found");
      return res.status(404).json({ message: 'Book not found' });
    }

    console.log("Book updated:", book);
    res.status(200).json(book);
  } catch (err) {
    console.error(err.message); 
    res.status(500).json({ message: err.message });
  }
});

// Delete a book by ID (protected)
router.delete('/books/:id', userAuth, async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
