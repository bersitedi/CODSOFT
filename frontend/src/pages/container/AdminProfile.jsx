import React from "react";
import authorImage from "../../assets/defaultpfp.jpg";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const AdminProfile = ({ className }) => {
  return (
    <section className={`mt-8 lg:mt-0 lg:overflow-hidden ${className}`}>
      <div className="lg:bg-white lg:shadow-md">
        <div className="bg-cta flex items-center p-6">
          <img
            src={authorImage}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-lg text-white font-semibold">Jane Doe</h2>
            <p className="text-dark-light">Food Blogger | Recipe Developer</p>
          </div>
        </div>
        <p className="text-gray-700 mt-4 pl-6 pr-6">
          Passionate about cooking and sharing her delicious recipes with the
          world.
        </p>
        <hr className="my-6" />
        <div className="flex items-center justify-center gap-4 pl-6 pr-6 pb-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-800">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="mt-10 bg-white shadow-md">
        <div className="p-6 bg-cta">
          <h3 className="text-xl text-white font-semibold mb-2">
            Recent Articles:
          </h3>
        </div>
        <div className="p-6">
          <hr className="my-6" />
          <ul className="text-gray-700 text-sm">
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                How to Make the Perfect Pasta
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                10 Easy Breakfast Recipes for Busy Mornings
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                Quick and Healthy Lunch Ideas
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                Delicious Dinner Recipes to Try Tonight
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                How to Make the Perfect Pasta
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                10 Easy Breakfast Recipes for Busy Mornings
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                Quick and Healthy Lunch Ideas
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                Delicious Dinner Recipes to Try Tonight
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="hover:text-blue-500 hover:border-l-2 hover:border-l-cta"
              >
                How to Make the Perfect Pasta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminProfile;
