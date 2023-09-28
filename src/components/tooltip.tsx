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
          -translate-y-full invisible group-hover:visible p-2 z-50 min-w-[20rem]"
        >
          <div className="bg-cyan-950 border border-cyan-900 w-full">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
