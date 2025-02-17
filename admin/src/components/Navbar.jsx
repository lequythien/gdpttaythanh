import React, { useContext } from 'react';
import Logo from '../assets/images/gdpttaythanh.png';
// import { AppContext } from '../context/AppContext';
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // const { token, setToken, user } = useContext(AppContext);
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     setToken(null);
    //     navigate('/login');
    // };

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            {/* Bên trái: Logo và tên ứng dụng */}
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-8 mr-2" />
                <span className="text-white font-bold text-xl">Tên Ứng Dụng</span>
            </div>

            {/* Bên phải: Avatar và Login/Logout */}
            <div className="flex items-center space-x-4">
                {token ? (
                    <div className="flex items-center">
                        <img 
                            src={user?.avatar || "default_avatar.png"} 
                            alt="Avatar" 
                            className="h-8 w-8 rounded-full" 
                        />
                        <span className="text-white mr-2">{user?.name || "User"}</span>
                        <button 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;