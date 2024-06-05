import React from "react";
import { images, stables } from "../constant";
import { Link } from "react-router-dom";

const NewsCard = ({ news, className }) => {
  const navigateToPageTop = (link) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.location.href = link;
  };
  return (
    <div className={`${className} bg-white`}>
      <Link
        to={`/news/${news?.slug}`}
        onClick={() => navigateToPageTop(`/news/${news?.slug}`)}
      >
        <img
          className="rounded-md w-full"
          src={
            news.photo
              ? stables.S3_BUCKET_URL + news.photo
              : images.samplePostImage
          }
          alt=""
        />
      </Link>
      <Link
        to={`/news/${news?.slug}`}
        onClick={() => navigateToPageTop(`/news/${news?.slug}`)}
      >
        <h2 className="font-primary font-bold text-xl text-dark-soft pt-2 pb-1">
          {news.title}
        </h2>
        <p
          className="inline-flex items-center  text-base font-medium
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

export default NewsCard;
