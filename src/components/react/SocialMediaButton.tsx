import socialIcon from "../../assets/social-icon2.svg";
import facebookIcon from "../../assets/fb.svg";
import instaIcon from "../../assets/instagram.svg";
import mailIcon from "../../assets/mail.svg";
import { useState } from "react";

export default function SocialMediaButton() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  console.log(menuIsVisible);

  return (
    <div className="fixed bottom-16 right-6 z-20 flex flex-col items-center">
      <div className=" mb-2 flex flex-col [&_button]:my-2 [&_button]:rounded-full [&_button]:p-2 ">
        <button className="bg-green-700 translate-x-96">
          <img
            src={mailIcon.src}
            alt="Mailing address icon"
            className="w-14 h-14 p-1"
          />
        </button>
        <button className="bg-blue-500 translate-x-96">
          <img
            src={facebookIcon.src}
            alt="Facebook icon"
            className="w-14 h-14 p-1"
          />
        </button>
        <button className="bg-gradient-to-tr from-orange-400 to-fuchsia-700 translate-x-96">
          <img
            src={instaIcon.src}
            alt="Instagram icon"
            className="w-14 h-14 p-1"
          />
        </button>
      </div>
      <button
        className="bg-orange-500  w-20 h-20 p-2 flex justify-center items-center rounded-full"
        onClick={() => setMenuIsVisible(!menuIsVisible)}
      >
        <img
          src={socialIcon.src}
          alt="Social media menu button."
          className="animate-pulse p-2 hover:animate-none"
        />
      </button>
    </div>
  );
}
