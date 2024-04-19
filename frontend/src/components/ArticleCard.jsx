import React from "react";
import { images, stables } from "../constant";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`${className} bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <Link to={`/project/${post.slug}`}>
        <img
          className="rounded-t-lg w-full"
          src={
            post.photo
              ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
              : images.samplePostImage
          }
          alt=""
        />
      </Link>
      <Link to={`/project/${post.slug}`}>
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-xl p-3">
          {post.title}
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-lg pl-3">
          {post.caption}
        </p>
      </Link>

      <Link
        to={`/project/${post.slug}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium
        text-center text-blue-600 rounded-lg ml-3 hover:text-cta "
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
      </Link>
    </div>
  );
};

export default ArticleCard;
