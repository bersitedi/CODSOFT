import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-cta py-12">
      <footer className="container mx-auto grid grid-cols-10 px-5 gap-y-10 gap-x-8 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-12">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-white font-semibold md:text-lg">Explore</h3>
          <ul className="text-gray-300 text-sm mt-4 space-y-3 md:text-base">
            <li>
              <a href="/">Recipes</a>
            </li>
            <li>
              <a href="/">Cooking Tips</a>
            </li>
            <li>
              <a href="/">Food Reviews</a>
            </li>
            <li>
              <a href="/">Healthy Living</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-white font-semibold md:text-lg">About Us</h3>
          <ul className="text-gray-300 text-sm mt-4 space-y-3 md:text-base">
            <li>
              <a href="/">Our Story</a>
            </li>
            <li>
              <a href="/">Meet the Team</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
          <h3 className="text-white font-semibold md:text-lg">Connect</h3>
          <ul className="text-gray-300 text-sm mt-4 space-y-3 md:text-base">
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">YouTube</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2">
          <h3 className="text-white font-semibold md:text-lg">More</h3>
          <ul className="text-gray-300 text-sm mt-4 space-y-3 md:text-base">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2 flex flex-col items-center justify-center">
          <p className="text-gray-300 text-sm text-center md:text-left md:text-base lg:text-sm">
            Bringing you delicious recipes and food inspiration.
          </p>
          <ul className="flex justify-center items-center mt-4 space-x-6 text-gray-300">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-8 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram className="w-8 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="w-8 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-8 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:col-span-12 lg:col-span-10 flex flex-col items-center justify-center">
          <p className="font-bold  text-gray-300">
            © 2024 Food Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
