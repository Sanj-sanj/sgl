import { useRef, useState } from "react";
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

  const popUpMenu = (links: { text: string; path: string }[]) =>
    orientation === "horizontal" ? (
      <div
        className="h-[100vh] absolute top-1/2 left-1/2 animate-fade-in"
        style={{ transform: "translate(-50%, 2%)" }}
        onMouseMove={() => (isHoveringPopup.current = true)}
        onMouseLeave={() =>
          setTimeout(() => {
            isHoveringPopup.current = false;
            setVisible(<></>);
          }, 50)
        }
      >
        <div className="top-1/2 left-1/2 bg-stone-100 z-50 border-t border-stone-300 text-stone-800">
          {links.map((link) => (
            <div key={link.text} className="min-w-44 w-full">
              <a
                className="w-full flex justify-center px-1 py-2 hover:bg-stone-200 border-stone-300 [&:nth-child(n+1):nth-last-child(n+1)]:border-b border-x "
                href={link.path}
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    ) : (
      //  MOBILE MENU'S DROP DOWN BOX
      <div
        className="w-full animate-fade-in"
        onMouseMove={() => (isHoveringPopup.current = true)}
        onMouseLeave={() =>
          setTimeout(() => {
            isHoveringPopup.current = false;
            setVisible(<></>);
          }, 50)
        }
      >
        <div className="bg-stone-100 z-50 border-t border-stone-300 text-stone-800">
          {links.map((link) => (
            <div key={link.text} className="w-full">
              <a
                className="w-full flex justify-center px-1 py-2 hover:bg-stone-200 border-stone-300 [&:nth-child(n+1):nth-last-child(n+1)]:border-b border-x "
                href={link.path}
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="relative h-auto md:w-auto w-full ">
      <button
        className="w-full"
        onMouseMove={() => {
          orientation === "horizontal" && setVisible(popUpMenu(subTexts));
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            if (isHoveringPopup.current === true) return;
            else isHoveringPopup.current = false;
            setVisible(<></>);
          }, 50);
        }}
        onClick={() =>
          orientation === "vertical" && setVisible(popUpMenu(subTexts))
        }
        id={text}
        data-dropdown="true"
      >
        {text} <span className="font-bold text-xs">▼</span>
      </button>
      {visible}
    </div>
  );
}
