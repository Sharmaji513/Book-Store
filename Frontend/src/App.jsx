import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/" element={<Home/>} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/books/:id" element={<UpdateBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
