import { FaCookieBite } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import CookieContentCTA from "./CookieContentCTA";

const CookieContent = () => {
  return (
    <div className="max-w-64 flex flex-col items-start gap-8 bg-black dark:bg-white rounded-xl p-6">
      <div className="flex justify-between w-full mb-4">
        <FaCookieBite color="white" size={50} />
        <IoIosClose color="white" size={30} className="cursor-pointer" />
      </div>
      <p className="max-w-40 text-white">
        We use cookies to improve your user experince
      </p>
      <CookieContentCTA ctatext="I like Cookies" />
    </div>
  );
};

export default CookieContent;
