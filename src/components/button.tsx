import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export default function Button(props: Props): JSX.Element {
  const { children, onClick } = props;

  return (
    <button
      className="rounded border border-cyan-900 py-2 px-4 text-sm text-white
      font-normal hover:border-amber-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
