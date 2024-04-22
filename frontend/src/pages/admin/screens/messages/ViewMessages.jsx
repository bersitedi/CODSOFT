import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { getMessageById } from "../../../../services/index/messages";
import { FiArrowLeft } from "react-icons/fi"; // Import the arrow back icon

const ViewMessages = () => {
  const location = useLocation();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const messageId = location.pathname.split("/").pop();

    getMessageById(messageId)
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("Error fetching message details:", error);
      });
  }, [location]);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center mb-4">
        <Link
          to="/admin/messages/manage"
          className="text-gray-600 hover:text-gray-900 p-1 rounded-full text-2xl border border-green-400"
        >
          <FiArrowLeft className="mr-2 text-green-500 pl-1" />
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">View Message</h1>
      {message ? (
        <div className="bg-white shadow-md rounded px-8 py-6">
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Message ID:</span> {message._id}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Email:</span> {message.email}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Subject:</span> {message.subject}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Message:</span> {message.message}
          </p>
        </div>
      ) : (
        <p>Loading message...</p>
      )}
    </div>
  );
};

export default ViewMessages;
