import React from "react";
import { images, stables } from "../constant";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, className }) => {
  return (
    <div className={`${className} bg-white`}>
      <Link to={`/project/${post.slug}`}>
        <img
          className="rounded-md w-full"
          src={
            post.photo
              ? stables.S3_BUCKET_URL + post.photo
              : images.samplePostImage
          }
          alt=""
        />
      </Link>
      <Link to={`/project/${post.slug}`}>
        <h2 className="font-mono font-bold text-xl text-dark-soft md:text-2xl lg:text-lg py-2">
          {post.title}
        </h2>
        <p
          className="inline-flex items-center  text-sm font-medium
        text-center text-blue-600 rounded-lg  hover:text-cta gap-x-2"
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
        </p>
      </Link>
    </div>
  );
};

export default ArticleCard;
