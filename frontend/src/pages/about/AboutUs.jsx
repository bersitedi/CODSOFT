import React from "react";
import art from "../../assets/art.jpg";
import MainLayout from "../../components/MainLayout";
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import AboutSection from "./component/AboutSection";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="min-h-75 flex flex-wrap justify-center">
        <div className="max-w-1320 flex flex-col items-center my-20">
          <p className="font-bold text-3xl text-blue-700 mb-5">Meet Our team</p>
          <p className="text-lg text-gray-600 max-w-md text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-72 mb-10 mx-4 p-4 shadow-gray-100 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="w-full h-28 flex justify-center items-center">
                  <img
                    className="w-28 h-28 rounded-full"
                    src={art}
                    alt="Instructor"
                  />
                </div>
                <p className="font-bold text-lg text-gray-700 mb-1 mt-3">
                  Maxwell Doe
                </p>
                <p className="font-bold text-lg text-blue-700 mb-5">CEO</p>
                <div className="flex justify-between w-28">
                  <a href="http://www.twitter.com/" target="_blank">
                    <FaTwitter />
                  </a>
                  <a href="http://www.facebook.com/" target="_blank">
                    <FaFacebook />
                  </a>
                  <a href="http://www.instagram.com/" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="http://www.gmail.com/" target="_blank">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-72 mb-10 mx-4 p-4 shadow-gray-100 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="w-full h-28 flex justify-center items-center">
                  <img
                    className="w-28 h-28 rounded-full"
                    src={art}
                    alt="Instructor"
                  />
                </div>
                <p className="font-bold text-lg text-gray-700 mb-1 mt-3">
                  Maxwell Doe
                </p>
                <p className="font-bold text-lg text-blue-700 mb-5">Manager</p>
                <div className="flex justify-between w-28">
                  <a href="http://www.twitter.com/" target="_blank">
                    <FaTwitter />
                  </a>
                  <a href="http://www.facebook.com/" target="_blank">
                    <FaFacebook />
                  </a>
                  <a href="http://www.instagram.com/" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="http://www.gmail.com/" target="_blank">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-72 mb-10 mx-4 p-4 shadow-gray-100 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="w-full h-28 flex justify-center items-center">
                  <img
                    className="w-28 h-28 rounded-full"
                    src={art}
                    alt="Instructor"
                  />
                </div>
                <p className="font-bold text-lg text-gray-700 mb-1 mt-3">
                  Maxwell Doe
                </p>
                <p className="font-bold text-lg text-blue-700 mb-5">
                  Architect
                </p>
                <div className="flex justify-between w-28">
                  <a href="http://www.twitter.com/" target="_blank">
                    <FaTwitter />
                  </a>
                  <a href="http://www.facebook.com/" target="_blank">
                    <FaFacebook />
                  </a>
                  <a href="http://www.instagram.com/" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="http://www.gmail.com/" target="_blank">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-72 mb-10 mx-4 p-4 shadow-gray-100 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="w-full h-28 flex justify-center items-center">
                  <img
                    className="w-28 h-28 rounded-full"
                    src={art}
                    alt="Instructor"
                  />
                </div>
                <p className="font-bold text-lg text-gray-700 mb-1 mt-3">
                  Maxwell Doe
                </p>
                <p className="font-bold text-lg text-blue-700 mb-5">Engineer</p>
                <div className="flex justify-between w-28">
                  <a href="http://www.twitter.com/" target="_blank">
                    <FaTwitter />
                  </a>
                  <a href="http://www.facebook.com/" target="_blank">
                    <FaFacebook />
                  </a>
                  <a href="http://www.instagram.com/" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="http://www.gmail.com/" target="_blank">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </MainLayout>
  );
};

export default AboutUs;
