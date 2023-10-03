type Props = {
  ratio: number;
};

export default function ProgressBar({ ratio }: Props): JSX.Element {
  return (
    <div className="w-full rounded-full h-1 bg-gray-700">
      <div
        className="bg-cyan-700 h-1 rounded-full"
        style={{ width: `${ratio}%` }}
      />
    </div>
  );
}
