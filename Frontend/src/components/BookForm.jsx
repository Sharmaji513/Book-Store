
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";

const AddBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddBook = async (bookData) => {
    setLoading(true);
    try {
      await axiosInstance.post('/books', bookData);
      setLoading(false);
      navigate('/books');
    } catch (error) {
      setLoading(false);
      console.error('Error adding book', error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-semibold text-center mb-6">Add New Book</h1>
      <BookForm onSubmit={handleAddBook} loading={loading} />
    </div>
  );
};

export default AddBook;
