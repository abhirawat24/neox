import React, { useState } from 'react';
import logo from "../assets/"
const Header = () => {
    // State to handle login/logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Toggle login/logout state
    const handleAuth = () => {
        setIsLoggedIn(!isLoggedIn); 
    };

    return (
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
            <div className="navbar-logo">
                {/* Replace the src with the path to your logo */}
                <img src="./assets/Godrej_Logo.svg" alt="Logo" className="h-12 cursor-pointer bg-black hidden" />
            </div>
            <div className="navbar-buttons">
                {isLoggedIn ? (
                    <button
                        onClick={handleAuth}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleAuth}
                        className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
