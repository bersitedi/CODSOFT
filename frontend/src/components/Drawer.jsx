import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { submitMessage } from "../services/index/messages";
import { FaArrowRight } from "react-icons/fa";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleShowDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await submitMessage(formData);
      setSubmitSuccess(true);
      setFormData({ email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center h-full">
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col text-primary">
          <p className="text-sm font-merri font-semibold">
            Get a free consultation, visit our office
          </p>
        </div>
        <div className="mt-2 md:mt-3">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded-md flex items-center"
            type="button"
            onClick={handleShowDrawer}
          >
            Contact us
            <FaArrowRight className="text-xs ml-2" />
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded-md focus:ring-4 focus:ring-blue-300"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Send message"}
              </button>
              {submitError && (
                <p className="text-red-500 text-sm mt-2">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-green-500 text-sm mt-2">
                  Message submitted successfully
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
