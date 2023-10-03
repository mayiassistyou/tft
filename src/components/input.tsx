"use client";

import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

type Props = {
  placeholder?: string;
  className?: string;
  prefix?: ReactNode;
  handleInputChange?: (value: string) => void;
};

export default function Input(props: Props): JSX.Element {
  const { placeholder = "", className = "", prefix, handleInputChange } = props;

  const [inputValue, setInputValue] = useState<string>("");
  const [isShowRemoveIcon, setIsShowRemoveIcon] = useState<boolean>(false);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setInputValue(e?.target?.value);
  }

  useEffect(() => {
    handleInputChange && handleInputChange(inputValue);
    if (inputValue) {
      setIsShowRemoveIcon(true);
    } else {
      setIsShowRemoveIcon(false);
    }
  }, [inputValue, handleInputChange]);

  return (
    <div
      className={`flex items-center w-full justify-between
      bg-cyan-950 border border-cyan-900 focus-within:border-amber-600
      py-2 px-3 ${className}`}
    >
      {prefix ? <span className="mr-3">{prefix}</span> : null}
      <input
        className="text-white outline-none bg-cyan-950 leading-none flex-grow"
        placeholder={placeholder}
        onChange={onChange}
        value={inputValue}
      />

      {isShowRemoveIcon ? (
        <button className="hover:text-white" onClick={() => setInputValue("")}>
          <FaXmark />
        </button>
      ) : null}
    </div>
  );
}
