import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h2>
      <button
        onClick={handleLogout}
        className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
