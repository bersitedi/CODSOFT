import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8 md:mt-10">
      <div className="w-full mb-3 pl-2">
        <h1 className="text-2xl font-bold font-mono mb-4 text-gray-600">
          About Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Company"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
            Welcome to Spring Consulting Architects and Engineers
          </h3>
          <p className="text-md font-lora text-gray-800 mb-4 pr-2">
            At Spring Consulting Architects and Engineers, we are dedicated to
            providing innovative and sustainable architectural and engineering
            solutions tailored to meet the unique needs of our clients. Whether
            you're planning a new construction project, renovating an existing
            structure, or seeking expert advice on sustainable building
            practices, we're here to help you every step of the way. We strive
            to deliver projects that not only meet but exceed our clients'
            expectations, while adhering to the highest standards of quality,
            safety, and environmental responsibility.
          </p>

          <div className="flex gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Contact us
            </Link>
            <Link
              to="/project"
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8 lg:pt-20 lg:px-10">
        <h4 className="text-2xl font-mono font-bold mb-3">Our Approach</h4>
        <p className="text-md font-lora text-gray-700 mb-4 pr-2">
          Our approach is rooted in collaboration, creativity, and technical
          excellence. We understand that each project is unique, with its own
          set of requirements and constraints. That's why we take the time to
          listen to our clients, understand their vision, and tailor our
          solutions to meet their specific needs.
        </p>
        <h4 className="text-2xl font-mono font-bold mb-3">Services</h4>
        <ul className="list-disc font-lora pl-5 mb-2">
          <li>
            Architectural Design: Our architects combine aesthetic vision with
            practical expertise to create spaces that are both beautiful and
            functional.
          </li>
          <li>
            Structural Engineering: Our structural engineers ensure that
            buildings are safe, stable, and structurally sound, using advanced
            analysis and design techniques.
          </li>
          <li>
            MEP Engineering: Our MEP engineers provide integrated solutions for
            mechanical, electrical, and plumbing systems, optimizing performance
            and energy efficiency.
          </li>
          <li>
            Project Management: Our project managers oversee the entire project
            lifecycle, coordinating timelines, budgets, and resources to ensure
            successful outcomes.
          </li>
        </ul>
        <Link to="/services" className="text-sm font-bold text-blue-500">
          Read more
        </Link>
        <h4 className="text-2xl font-mono mt-3 font-bold mb-3">
          Commitment to Sustainability
        </h4>
        <p className="text-md font-lora text-gray-700 mb-4 pr-2">
          At Spring Consulting Architects and Engineers, we believe in
          responsible stewardship of the environment. That's why we integrate
          sustainable design principles into every project, seeking to minimize
          environmental impact while maximizing long-term value for our clients.
        </p>
        <h4 className="text-2xl font-mono font-bold mb-3">
          Experience and Expertise
        </h4>
        <p className="text-md font-lora text-gray-700 mb-4 pr-2">
          With years of experience and a proven track record of success, our
          team brings a wealth of knowledge and expertise to every project.
          We've worked on projects of all sizes and complexities, from
          residential developments to commercial complexes to institutional
          facilities.
        </p>
        <h4 className="text-2xl font-mono font-bold mb-3">Get in Touch</h4>
        <p className="text-md font-lora text-gray-700 mb-4 pr-2">
          Whether you're planning a new construction project, renovating an
          existing space, or seeking expert advice on architectural and
          engineering matters, we're here to help. Contact us today to learn
          more about how we can bring your vision to life.
        </p>
        <Link
          to="/contact"
          className="bg-blue-500 px-4 py-2 rounded-md border-1 border-blue-400 hover:bg-blue-400 shadow-sm shadow-gray-500 text-white"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
