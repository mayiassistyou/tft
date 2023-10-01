type Props = {
  label: string;
  textSize?: "lg" | "xl";
};

export default function CharacterHeader({
  label,
  textSize = "lg",
}: Props): JSX.Element {
  return (
    <div className="border-b border-cyan-900 mb-4 py-1">
      <span
        className={`text-white text-${textSize} font-bold px-2 py-1 border-b-4
        border-amber-600`}
      >
        {label}
      </span>
    </div>
  );
}
