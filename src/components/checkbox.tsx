"use client";

import { ReactNode, useState } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
  selectedValues: string[];
  handleChange: (value: string, isCheck: boolean) => void;
};

export default function Checkbox(props: Props): JSX.Element {
  const { icon, title, value, selectedValues, handleChange } = props;
  const isSelected = selectedValues.includes(value);

  return (
    <div
      className="group flex items-center justify-between gap-2
      hover:cursor-pointer my-1"
      onClick={() => handleChange(value, !isSelected)}
    >
      <div className={`max-h-6 max-w-6 ${isSelected ? "text-white" : ""}`}>
        {icon}
      </div>
      <div className="flex-grow text-white">{title}</div>
      <div
        className={`h-3 w-3 rounded-full ${
          isSelected
            ? "bg-cyan-500"
            : "border-2 border-gray-600 group-hover:border-gray-400"
        }`}
      ></div>
    </div>
  );
}
