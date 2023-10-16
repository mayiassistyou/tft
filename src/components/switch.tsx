"use client";

import { useState } from "react";

const Switch = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <button
      className="flex items-center gap-4"
      onClick={() => setIsActive((prevState) => !prevState)}
    >
      <p className="text-[15px]">Show Partial Traits</p>

      <div
        className={`w-6 h-3 rounded-full transition-transform duration-100 ease-linear ${
          isActive ? "bg-[#227aad]" : "bg-[#123040]"
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full bg-white transition-transform duration-100 ease-linear ${
            isActive ? "translate-x-3" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
};

export default Switch;
