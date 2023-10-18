"use client";

import { useState } from "react";

type Props = {
  isActive: boolean;
  onActive: VoidFunction;
};

const Switch = ({ isActive, onActive }: Props) => {
  return (
    <button className="flex items-center gap-4" onClick={onActive}>
      <div
        className={`w-6 h-3 rounded-full transition-transform duration-100 ease-linear ${
          isActive ? "bg-cyan-700" : "bg-cyan-950"
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
