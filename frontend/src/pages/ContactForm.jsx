import React, { useState } from "react";
import { toast } from "react-hot-toast";
import art from "../assets/contact.jpg";
import location from "../assets/location.svg";
import MainLayout from "../components/MainLayout";
import { submitMessage } from "../services/index/messages";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitMessage(formData);
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Message submitted successfully!");
    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("Failed to submit message. Please try again.");
    }
  };

  return (
    <MainLayout>
      <div className="animate-fadeIn container p-10">
        <div className="flex flex-wrap mt-10">
          <div className="w-full md:w-1/2 md:-mt-8 lg:-mt-20">
            <img src={art} alt="" />
          </div>
          <div className="w-full md:w-1/2 md:-mt-8 lg:mt-8 md:pl-8">
            <h3 className="text-[18px] md:text-2xl font-bold font-primary mb-1 text-gray-600">
              Contact us for more Information!
            </h3>
            <hr className="border-2 border-green w-20 md:w-32 mb-3" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-2xl text-buttons" />
              <p className="font-bold text-sm">(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-xl text-buttons" />
              <p className="font-bold text-sm">mikegriffin@example.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-xl text-buttons" />
              <p className="font-bold text-sm">
                11 North Street, Baltimore, MD 49706
              </p>
            </div>
          </div>
          <div className="w-full pb-8 flex justify-center">
            <Map />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactForm;
