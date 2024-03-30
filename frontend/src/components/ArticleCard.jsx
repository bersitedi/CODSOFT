import React from "react";
import { images } from "../constant";
import defaultprofile from "../assets/defaultpfp.jpg";
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div className={`rounded-md overflow-hidden shadow-md ${className}`}>
      <img
        src={images.ArticleCardImage}
        alt="title"
        className="w-full object-cover object-center h-60 lg:h-48 "
      />
      <div className="p-2">
        <h2 className="font-roboto font-bold text-l text-dark-soft ">
          Yogurt and Chia Seed Pudding
        </h2>
        <p className="text-dark-soft mt-2 text-sm lg:text-xs">
          Healthy Breakfast Ideas to Start Your Day Right
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-5">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.PostProfileImage}
              alt=""
              className="rounded-full w-10 h-10 "
            />
            <div className="flex gap-x-1">
              <h4 className="font-bold italic text-dark-soft text-sm ">
                Bersi Tedi
              </h4>
              <span className="bg-green-300 w-fit bg-opacity-20 p-1.5 rounded-full">
                <BsCheckLg className="text-green-500 w-3 h-3" />
              </span>
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
