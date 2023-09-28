import { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
  className?: string;
};

export function TData({ children, className = "" }: TableProps): JSX.Element {
  return <td className={`p-2 align-middle ${className}`}>{children}</td>;
}

export function TRow({ children }: { children: ReactNode }): JSX.Element {
  return (
    <tr className="border border-cyan-900 hover:bg-cyan-950">{children}</tr>
  );
}

export function THead({ children }: { children: ReactNode }): JSX.Element {
  return <thead className="font-bold text-left bg-cyan-950">{children}</thead>;
}

export default function Table({ children }: TableProps): JSX.Element {
  return <table className="w-full border border-cyan-900">{children}</table>;
}
