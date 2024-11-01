import { useState } from "react";
const CookieContentCTA = ({ ctatext }) => {
  const [cookieButton, setCookieButton] = useState(false);
  return (
    <button className=" w-full dark:bg-black bg-white text-black dark:text-white p-2  rounded-lg cursor-pointer">
      {ctatext}
    </button>
  );
};

export default CookieContentCTA;
