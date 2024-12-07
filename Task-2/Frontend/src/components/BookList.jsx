import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get("/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Books</h2>
      <div className="flex justify-end">
        <Link
          to="/addbook"
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Add Book
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="p-4 border rounded-md shadow-sm bg-white"
          >
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-600">Author - {book.author}</p>
            <p className="text-gray-600">PublishedYear - {book.publishedYear}</p>
            <p className="text-gray-600">Genre - {book.genre}</p>
            <div className="mt-4 flex space-x-4">
              <Link
                to={`/books/${book._id}`} 
                className="bg-yellow-500 text-white px-4 py-2 rounded-md"
              >
                Update
              </Link>

              <button
                onClick={() => handleDelete(book._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {books.length === 0 && (
        <p className="text-center text-gray-500">
          No books available. Add a new book to get started.
        </p>
      )}
    </div>
  );
};

export default BookList;
