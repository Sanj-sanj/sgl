import { Fragment, useEffect, useRef, useState } from "react";
export default function PopupNavigation({
  text,
  subTexts,
  orientation,
}: {
  text: string;
  subTexts: { text: string; path: string }[];
  orientation: "horizontal" | "vertical";
}) {
  const [visible, setVisible] = useState(<></>);
  const isHoveringPopup = useRef(false);

  const cleanUpRef = useRef<number>();

  const popUpMenu = (links: { text: string; path: string }[]) => (
    <div
      className="h-[100vh] absolute top-1/2 left-1/2"
      style={{ transform: "translate(-50%, 2%)" }}
      onMouseMove={() => (isHoveringPopup.current = true)}
      onMouseLeave={() =>
        setTimeout(() => {
          isHoveringPopup.current = false;
          setVisible(<></>);
        }, 50)
      }
    >
      <ul className="top-1/2 left-1/2 bg-slate-200 z-50 right-[calc">
        {links.map((link) => (
          <li key={link.text} className="min-w-48">
            <a href={link.path}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative h-auto w-auto">
      <li
        onMouseMove={() => {
          setVisible(popUpMenu(subTexts));
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            if (isHoveringPopup.current === true) return;
            else isHoveringPopup.current = false;
            setVisible(<></>);
          }, 50);
        }}
        className={`sm:ml-2.5 text-center px-2  relative flex${(orientation === "vertical" && "w-full py-4") || ""}`}
      >
        <a href="#" data-dropdown="true" id="About">
          {" "}
          {text}⌄{" "}
        </a>
      </li>
      {visible}
    </div>
  );
}
