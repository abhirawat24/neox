import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Homepage from "./component/Home";
import Register from "./component/Register";
import CandidateSearch from "./component/CandidateSearch";
import LoginModal from "./component/Login";
import { IoReorderThree } from "react-icons/io5";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);
  const toggleHeader = () => setHeaderOpen(prev => !prev);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left side - Image */}
            <NavLink to={"/"}>
              <img src="/logo.png" alt="Logo" className="w-20" />
            </NavLink>

            {/* Right side - Icon and Login Button */}
            <div className="flex items-center">
              {/* Mobile Menu Icon */}
              <IoReorderThree
                onClick={toggleHeader}
                className="text-3xl cursor-pointer hover:text-gray-400 transition duration-300 lg:hidden"
              />
              
              {/* Large Screen Navigation Links */}
              <div className="sm:hidden lg:flex space-x-4">
                <NavLink
                  to="/"
                  className="px-3 py-2 block hover:bg-gray-700 rounded"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-3 py-2 block hover:bg-gray-700 rounded"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/candidate-search"
                  className="px-3 py-2 block hover:bg-gray-700 rounded"
                >
                  Candidate Search
                </NavLink>
              </div>

              <button
                onClick={openLoginModal}
                className="ml-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-[10px]"
              >
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Slide-in Navigation Links for Mobile */}
        <div
          className={`fixed top-0 right-0 bg-gray-800 text-white h-full w-64 transition-transform duration-300 ease-in-out lg:hidden ${
            headerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 relative">
            <p onClick={toggleHeader} className="absolute right-0 mr-4 cursor-pointer">
              X
            </p>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="px-3 py-2 block hover:bg-gray-700 rounded"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="px-3 py-2 block hover:bg-gray-700 rounded"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/candidate-search"
                  className="px-3 py-2 block hover:bg-gray-700 rounded"
                >
                  Candidate Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidate-search" element={<CandidateSearch />} />
        </Routes>

        {/* Login Modal */}
        <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />
      </div>
    </Router>
  );
};

export default App;
