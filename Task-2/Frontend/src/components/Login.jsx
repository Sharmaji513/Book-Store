import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('Admin@12345678');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token); 
      navigate('/books'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md mt-36">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'} 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} 
          </span>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
