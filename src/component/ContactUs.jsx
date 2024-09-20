import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="w-[30%]">
        <h1 className="text-center font-bold text-2xl mb-4 ">Contact Us</h1>
        <p className="text-center mb-6">
          Need to get in touch? Fill out the form with your inquiry to get help.
        </p>
      </div>
      <div className="w-[70%]">
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              type="text"
              id="first-name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              type="text"
              id="last-name"
              placeholder="Enter your last name"
            />
          </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email ID
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="message"
            >
              What Can We Help You With?
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              id="message"
              rows="4"
              placeholder="Describe your inquiry here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
