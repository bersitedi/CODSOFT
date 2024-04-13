import React from "react";
import art from "../../assets/art.jpg";
import MainLayout from "../../components/MainLayout";

const ContactForm = () => {
  return (
    <MainLayout>
      <div className="container p-10">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            Swing by for a Consultation, or leave us a message:
          </p>
        </div>
        <div className="flex flex-wrap mt-6">
          <div className="w-full md:w-1/2">
            <img src={art} alt="" />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-4">
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="fname" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lname" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country" className="text-sm font-medium">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                  style={{ height: "170px" }}
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300"
              />
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactForm;
