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
        <ul className="top-1/2 left-1/2 bg-stone-100 z-50 border-t border-stone-300 text-stone-800">
          {links.map((link) => (
            <li key={link.text} className="min-w-44 w-full">
              <a
                className="w-full flex justify-center p-1 hover:bg-stone-200 border-stone-300 [&:nth-child(n+1):nth-last-child(n+1)]:border-b border-x "
                href={link.path}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      //  MOBILE MENU'S DROP DOWN BOX
      <div
        className="w-full"
        onMouseMove={() => (isHoveringPopup.current = true)}
        onMouseLeave={() =>
          setTimeout(() => {
            isHoveringPopup.current = false;
            setVisible(<></>);
          }, 50)
        }
      >
        <ul className="bg-stone-100 z-50 border-t border-stone-300 text-stone-800">
          {links.map((link) => (
            <li key={link.text} className="w-full">
              <a
                className="w-full flex justify-center p-1 hover:bg-stone-200 border-stone-300 [&:nth-child(n+1):nth-last-child(n+1)]:border-b border-x "
                href={link.path}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <div className="relative h-auto md:w-auto w-full ">
      <li
        className={`md:ml-2.5 text-center px-2 relative md:flex${(orientation === "vertical" && " w-full py-4") || ""}`}
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
      >
        <button data-dropdown="true" id={text}>
          {text} <span className="font-bold">▼</span>
        </button>
      </li>
      {visible}
    </div>
  );
}
