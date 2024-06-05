import React from "react";

const CtaButton = () => {
  return (
    <button className="cta relative mx-auto p-3 transition-all duration-200 ease-in-out border-none bg-none cursor-pointer">
      <div className="flex justify-center items-center">
        <span className="relative font-ubuntu font-bold text-base tracking-wider text-gray-200">
          Get <span className="text-gray-200">Started</span>
        </span>
        <svg
          width="15px"
          height="10px"
          viewBox="0 0 13 10"
          className="relative top-0 ml-2 fill-none stroke-[#FFFFFF] stroke-2 stroke-linecap-round stroke-linejoin-round transform translate-x-[-5px] transition-all duration-300 ease-in-out"
        >
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </div>
      <style jsx>{`
        .cta:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          border-radius: 9999px;
          background: #09344f;
          width: 55px;
          height: 55px;
          transition: all 0.3s ease-in-out;
        }

        .cta:hover:before {
          width: 100%;
          background: rgba(142, 198, 63, 0.5);
        }

        .cta:hover svg {
          transform: translateX(0);
        }

        .cta:active {
          transform: scale(0.95);
        }
      `}</style>
    </button>
  );
};

export default CtaButton;
