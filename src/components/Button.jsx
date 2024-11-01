"use client";
import { FaCookieBite } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Button = () => {
  const [isCookieShown, setisCookieShown] = useState(true);
  return (
    isCookieShown && (
      <div className="max-w-64 flex flex-col items-start gap-8 bg-black rounded-xl p-6">
        <div className="flex justify-between w-full mb-4">
          <FaCookieBite color="white" size={50} />
          <IoIosClose
            onClick={() => {
              setisCookieShown(!isCookieShown);
            }}
            color="white"
            size={30}
            className="cursor-pointer"
          />
        </div>
        <p className="max-w-40 text-white">
          We use cookies to improve your user experince
        </p>
        <button
          onClick={() => {
            setisCookieShown(!isCookieShown);
          }}
          className=" w-full bg-white text-black p-2  rounded-lg"
        >
          I like cookies
        </button>
      </div>
    )
  );
};

export default Button;
