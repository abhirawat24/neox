import React from "react";
import Footer from "./Footer";
import Efficiency from "./Efficiency";
import ContactUs from "./ContactUs";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-200 text-gray-800">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[600px] bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
          <div className="w-full md:w-1/2 p-8 md:pl-16 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Efficient Hiring <br /> Made Easy
            </h2>
            <p className="text-lg md:text-2xl mb-6">
              Discover a fast and effective way to manage candidates and
              streamline your recruitment process.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 transform">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-12 md:pr-16 h-[600px] flex items-center justify-center">
            <img
              src="https://careers.buyerforesight.com/wp-content/uploads/2022/11/IT-Support-Engineer.png"
              alt="Hiring Illustration"
              className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Key Features Section */}
        <section className="p-10 md:p-16 bg-white text-center">
          <h3 className="text-4xl font-extrabold mb-10">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-3">Automated Hiring</h4>
              <p className="text-gray-600">
                Reduce manual efforts with our automated workflows and candidate screening.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-3">Candidate Search</h4>
              <p className="text-gray-600">
                Find the best talent using our advanced search tools based on location and role.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-3">Analytics Dashboard</h4>
              <p className="text-gray-600">
                Gain insights into your hiring process with detailed reports and analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Efficiency Section */}
        <section className="my-12 p-8 bg-gray-50 rounded-lg shadow-lg">
          <Efficiency />
        </section>

        {/* Contact Us Section */}
        <section className="my-12">
          <ContactUs />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
