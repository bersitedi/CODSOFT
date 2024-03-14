import React from "react";
import pudding from "../assets/photo1.jpg";
import defaultprofile from "../assets/defaultpfp.jpg";
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div className={`rounded overflow-hidden shadow-md ${className}`}>
      <img
        src={pudding}
        alt="title"
        className="w-full object-cover object-center h-60 lg:h-48 "
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-l text-dark-soft ">
          Yogurt and Chia Seed Pudding
        </h2>
        <p className="text-dark-soft mt-2 text-sm lg:text-xs">
          Healthy Breakfast Ideas to Start Your Day Right
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-5">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={defaultprofile}
              alt=""
              className="rounded-full w-10 h-10 "
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm ">
                Bersi Tedi
              </h4>
              <div className="flex items-center gap-x-1 gap-y-3">
                <span className="bg-green-300 w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="text-green-500 w-3 h-3" />
                </span>
                <span className="italic text-dark-soft text-xs ">
                  Verified writer
                </span>
              </div>
            </div>
          </div>

          <span className="font-bold text-dark-soft italic text-sm ">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
