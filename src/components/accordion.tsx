"use client";

import { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  title: string;
  content: ReactNode;
  isOpen?: boolean;
};

export default function Accordion({
  title,
  content,
  isOpen = false,
}: Props): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(isOpen);

  return (
    <div className="my-2">
      <div
        className=" group flex justify-between items-stretch
        hover:cursor-pointer"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        <div
          className={`bg-cyan-500 transition-all duration-300 ${
            isExpanded ? "w-1" : "w-0"
          }`}
        ></div>
        <span
          className={`flex-grow py-1 text-lg font-semibold transition-all
          duration-300 ${isExpanded ? "pl-4 text-white" : "pl-0"}`}
        >
          {title}
        </span>
        <div
          className={`self-center transition duration-300 ${
            isExpanded ? "-rotate-180" : "rotate-0"
          }`}
        >
          <FaChevronDown />
        </div>
      </div>

      <div
        style={{
          transition: isExpanded
            ? "max-height .5s ease-in"
            : "max-height .5s ease-out",
        }}
        className={`overflow-hidden ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className={`py-2 ${isExpanded ? "" : "display-none"}`}>
          {content}
        </div>
      </div>
    </div>
  );
}
