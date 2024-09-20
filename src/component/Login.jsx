import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Login
                </button>
            </form>
            <button
                className="w-full mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={onClose}
            >
                Close
            </button>
            <div className="mt-6 flex justify-center gap-6">
                <NavLink to="/forgot-password">
                    <p className="text-blue-600 hover:underline">Forgot Password?</p>
                </NavLink>
                <NavLink to="/register">
                    <p className="text-blue-600 hover:underline">Sign Up</p>
                </NavLink>
            </div>
        </div>
    </div>
    
    );
};

export default LoginModal;
