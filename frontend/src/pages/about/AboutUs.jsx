import React from "react";
import art from "../../assets/art.jpg";
import MainLayout from "../../components/MainLayout";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">About Us Page</h1>
        <p className="mt-4">Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 className="text-center text-3xl mt-12 mb-8 font-bold">
        Meet our Team
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={art} alt="Jane" className="w-full" />
            <div className="p-6">
              <h2 className="text-xl font-bold">Jane Doe</h2>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-700 mt-2">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="text-gray-700">jane@example.com</p>
              <button className="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={art} alt="Mike" className="w-full" />
            <div className="p-6">
              <h2 className="text-xl font-bold">Mike Ross</h2>
              <p className="text-gray-600">Art Director</p>
              <p className="text-gray-700 mt-2">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="text-gray-700">mike@example.com</p>
              <button className="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={art} alt="John" className="w-full" />
            <div className="p-6">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-600">Designer</p>
              <p className="text-gray-700 mt-2">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="text-gray-700">john@example.com</p>
              <button className="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
