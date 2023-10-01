type Props = {
  label: number;
};

export default function NumberCircle({ label }: Props): JSX.Element {
  return (
    <span
      className="flex justify-center items-center rounded-full border 
    border-cyan-900 w-7 h-7 text-sm font-bold"
    >
      {label}
    </span>
  );
}
