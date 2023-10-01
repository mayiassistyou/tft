import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Box({ children, className = "" }: Props): JSX.Element {
  return (
    <div
      className={`bg-cyan-950 border border-cyan-900 rounded-md p-5 ${className}`}
    >
      {children}
    </div>
  );
}
