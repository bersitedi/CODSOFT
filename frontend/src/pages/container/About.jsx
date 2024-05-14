import React from "react";
import { Link } from "react-router-dom";
import Drawer from "../../components/Drawer";

const About = () => {
  return (
    <div className="container px-5 py-10 mx-auto flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <div className="text-start">
          <h4 className="text-xl text-blue-600 font-bold mb-2 font-mono">
            About Us
          </h4>
          <h2 className="text-3xl  font-bold mb-2">
            Learn More About our Company
          </h2>
          <hr className="border-2 border-green w-40 mb-3" />
          <p className="text-md mb-3 font-lora">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula urna sit amet consequat rutrum. Duis scelerisque facilisis
            nunc, eget eleifend arcu elementum non. Vivamus eget magna in lectus
            vehicula maximus id at libero. Aliquam in massa id metus congue
            suscipit vel ac dui. Suspendisse potenti.
          </p>
          <p className="text-md mb-5 font-lora">
            Fusce quis neque non tellus aliquet vehicula nec vel odio. Morbi
            blandit justo non ultrices mattis. Proin ullamcorper, ipsum et
            accumsan hendrerit, nulla justo congue metus, id aliquet ligula
            mauris nec turpis.
          </p>
          <Link
            to="/about"
            className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 text-white font-semibold"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center flex-col md:flex-row">
        <div className="mb-5 lg:mr-5 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1508459855340-fb63ac591728?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image 1"
            className="w-full lg:w-[260px] h-[300px] md:h-auto object-cover rounded-lg"
          />
        </div>
        <div className="lg:mt-16 md:ml-8 lg:-ml-10">
          <div className="bg-gray-100 w-full lg:w-[330px] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-mono mb-2 font-semibold">
              Spring Consulting Architects and Engineers
            </h2>
            <p className="text-sm mb-5 font-lora">
              Fusce quis neque non tellus aliquet vehicula nec vel odio. Morbi
              blandit justo non ultrices mattis. Fusce quis neque non tellus
              aliquet vehicula nec vel odio. Morbi blandit justo non ultrices
              mattis. Proin ullamcorper, ipsum et accumsan hendrerit, nulla
              justo congue metus, id aliquet ligula mauris nec turpis. Proin
              ullamcorper, ipsum et accumsan hendrerit, nulla justo congue
              metus, id aliquet ligula mauris nec turpis. Fusce quis neque non
              tellus aliquet vehicula nec vel odio. Morbi blandit justo non
              ultrices mattis. Proin ullamcorper, ipsum et accumsan hendrerit,
              nulla justo congue metus, id aliquet ligula mauris nec turpis.
            </p>
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
