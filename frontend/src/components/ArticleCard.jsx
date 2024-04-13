import React from "react";
import hero from "../assets/art.jpg";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`${className} bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <a href="#">
        <img className="rounded-t-lg" src={hero} alt="" />
      </a>

      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-600 rounded-lg hover:text-cta "
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default ArticleCard;
