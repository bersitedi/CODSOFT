import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import your icon component here

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleShowDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex items-center h-full">
      <div className="hidden md:block md:text-center">
        <div className="flex items-center">
          <p className="mt-5 mr-4 md:ml-10 text-gray-400">
            Get a free consultation, visit our office
          </p>
          <button
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md flex items-center"
            type="button"
            onClick={handleShowDrawer}
          >
            Contact us
            <FiSearch className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-80 md:w-96 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <h5 className="text-gray-700 text-lg flex items-center">
                <FiSearch className="w-5 h-5 mr-2" />
                Contact us
              </h5>
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                type="button"
                onClick={handleCloseDrawer}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded-md focus:ring-4 focus:ring-blue-300"
              >
                Send message
              </button>
            </form>
            {/* Additional content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
