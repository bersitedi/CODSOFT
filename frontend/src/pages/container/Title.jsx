import React from "react";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";
import food5 from "../../assets/food5.jpg";

const Title = ({ className }) => {
  return (
    <div className={`lg:overflow-hidden lg:shadow-lg lg:mb-20 ${className}`}>
      <div className="border-b-2">
        <h1 className="text-2xl font-semibold text-cta p-10">
          Top 10 Healthy Breakfast Ideas to Start Your Day Right Are you tired
          of the same old breakfast routine?
        </h1>
      </div>
      <section className="bg-white">
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto sm:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={food1}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-l font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Salad
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={food2}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-l font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Avocado and Egg Toast
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40"
                >
                  <img
                    src={food3}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-l font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    BBQ
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40"
                >
                  <img
                    src={food4}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-l font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Chicken
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto sm:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={food5}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-l font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Burger
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
