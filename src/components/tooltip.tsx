import { ReactNode } from "react";

type Props = {
  content: ReactNode;
  children: ReactNode;
  placement?: "top" | "right";
};

export default function Tooltip({
  content,
  children,
  placement = "top",
}: Props): JSX.Element {
  return (
    <>
      <div className="relative group">
        {children}

        <div
          className={`absolute top-0 left-0 transform -translate-x-1/2
          -translate-y-full invisible group-hover:visible p-2 z-50 w-max
          max-w-[35rem] ${
            placement === "top"
              ? "top-0"
              : placement === "right"
              ? "right-0"
              : ""
          }`}
        >
          <div className="bg-gray-800 border border-cyan-900">{content}</div>
        </div>
      </div>
    </>
  );
}
