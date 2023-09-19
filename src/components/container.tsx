import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props): JSX.Element {
  return (
    <section className="flex justify-center">
      <div className={`max-w-[1200px] w-full ${className}`}>{children}</div>
    </section>
  );
}
