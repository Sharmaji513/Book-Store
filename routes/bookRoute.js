const express = require("express");
const Book = require("../models/Book");

const router = express.Router();



//Create a book
router.post('/' , async(req,res) =>{

const {title, author, publishedYear, genre} = req.body

    try {
        
        if (!title || !author || !publishedYear || !genre) {
            return res.status(400).json({ message: 'All fields are required' });
          }
        
        
        const book =  new Book({title, author, publishedYear, genre})
        await book.save()
        res.status(201).json(book);

    } catch (error) {
        console.log(error);
        
    }
})


//get all books
router.get('/', async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving books', error: err.message });
    }
  });



//get a specific book by ID
router.get('/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving book', error: err.message });
    }
  });



//Update a book by ID
router.put('/:id', async (req, res) => {
    const { title, author, publishedYear, genre } = req.body;
  
    if (!title || !author || !publishedYear || !genre) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const book = await Book.findByIdAndUpdate(
        req.params.id,
        { title, author, publishedYear, genre },
       
      );
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ message: 'Error updating book', error: err.message });
    }
  });
  
  //Delete a book by ID
  router.delete('/:id', async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting book', error: err.message });
    }
  });
  

module.exports = router;