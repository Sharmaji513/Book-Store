import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance"; 

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
  });

  
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axiosInstance.get(`/books/${id}`);
        setBook(response.data); 
      } catch (error) {
        console.error("Error fetching the book data:", error);
      }
    };

    fetchBook();
  }, [id]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.put(`/books/${id}`, book);
      navigate("/books");
    } catch (error) {
      console.error("Error updating the book:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={book.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        
        {/* Author Input */}
        <div className="flex flex-col">
          <label htmlFor="author" className="text-sm font-medium">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={book.author}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        
        {/* Published Year Input */}
        <div className="flex flex-col">
          <label htmlFor="publishedYear" className="text-sm font-medium">Published Year</label>
          <input
            type="text"
            name="publishedYear"
            id="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* Genre Input */}
        <div className="flex flex-col">
          <label htmlFor="genre" className="text-sm font-medium">Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            value={book.genre}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
