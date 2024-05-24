import socialIcon from "../../assets/social-icon2.svg";
import facebookIcon from "../../assets/fb.svg";
import instaIcon from "../../assets/instagram.svg";
import mailIcon from "../../assets/mail.svg";
import { Fragment, useRef, useState } from "react";

export default function SocialMediaButton() {
  const fbButton = useRef<null | HTMLButtonElement>(null);
  const mailButton = useRef<null | HTMLButtonElement>(null);
  const instaButton = useRef<null | HTMLButtonElement>(null);
  const overlay = useRef<null | HTMLDivElement>(null);

  function handleOpenMenu() {
    [mailButton, fbButton, instaButton].forEach((el) => {
      const button = el.current;
      if (button) {
        button.classList.toggle("translate-x-96");
        button.classList.toggle("animate-fade-in");
      }
    });
    overlay.current?.classList.toggle("hidden");
  }

  return (
    <>
      <div
        ref={overlay}
        className="h-full w-full absolute top-0 z-40 hidden"
        onClick={() => handleOpenMenu()}
      ></div>
      <div className="fixed bottom-16 right-6 flex flex-col items-center z-50">
        <div className=" mb-2 flex flex-col [&_button]:my-2 [&_button]:rounded-full [&_button]:p-2">
          <button className="bg-green-700 translate-x-96" ref={mailButton}>
            <img
              src={mailIcon.src}
              alt="Mailing address icon"
              className="w-14 h-14 p-1"
            />
          </button>
          <button className="bg-blue-500 translate-x-96" ref={fbButton}>
            <img
              src={facebookIcon.src}
              alt="Facebook icon"
              className="w-14 h-14 p-1"
            />
          </button>
          <button
            className="bg-gradient-to-tr from-orange-400 to-fuchsia-700 translate-x-96"
            ref={instaButton}
          >
            <img
              src={instaIcon.src}
              alt="Instagram icon"
              className="w-14 h-14 p-1"
            />
          </button>
        </div>
        <button
          className="bg-orange-500  w-20 h-20 p-2 flex justify-center items-center rounded-full"
          onClick={() => handleOpenMenu()}
        >
          <img
            src={socialIcon.src}
            alt="Social media menu button."
            className="animate-pulse p-2 hover:animate-none"
          />
        </button>
      </div>
    </>
  );
}
