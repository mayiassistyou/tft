import { ReactNode } from "react";

type Props = {
  content: ReactNode;
  children: ReactNode;
};

export default function Tooltip({ content, children }: Props): JSX.Element {
  return (
    <>
      <div className="relative group">
        {children}

        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2
          -translate-y-full invisible group-hover:visible p-2 z-50 w-max
          max-w-[35rem]"
        >
          <div className="bg-gray-800 border border-cyan-900">{content}</div>
        </div>
      </div>
    </>
  );
}
