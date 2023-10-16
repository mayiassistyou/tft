import { ChampionType } from "@/types/champion.type";

type Props = {
  champion?: Pick<ChampionType, "imageUrl" | "name" | "cost">;
  onClick?: VoidFunction;
};

const colorByCost = {
  1: "gray-500",
  2: "green-500",
  3: "blue-600",
  4: "violet-600",
  5: "yellow-300",
};

const ChampionBuilder = (props: Props) => {
  const { champion, onClick } = props;

  const handleSelect = () => !!champion && onClick?.();

  return (
    <button
      className={`inline-block text-left relative w-[72px] h-[42px] bg-cyan-950 border-l-3  border-r-3  cursor-pointer opacity-100 ${
        champion?.name
          ? `border-${
              colorByCost[champion?.cost?.[0] as keyof typeof colorByCost]
            }`
          : "border-l-cyan-900 border-r-cyan-900"
      }`}
      draggable
      onClick={handleSelect}
      onDragEnd={(e) => console.log("event drag end", e)}
      onDragLeave={(e) => console.log("event drag leave", e)}
      onDragOver={(e) => e.preventDefault()}
      style={{
        backgroundImage: `url(${champion?.imageUrl})`,
        backgroundSize: "auto",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        zIndex: 20,
      }}
    >
      <div
        className={`absolute border-t-3 overflow-hidden h-[50px] w-[50px] z-10 border-r-3  bg-inherit left-2 ${
          champion?.name
            ? `border-${
                colorByCost[champion?.cost?.[0] as keyof typeof colorByCost]
              }`
            : "border-t-cyan-900 border-r-cyan-900"
        }`}
        style={{
          transform: "scaleY(0.6) rotate(-45deg)",
          top: -25,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${champion?.imageUrl})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            transform: "rotate(45deg)",
            top: -36,
            width: 100,
            height: 180,
            position: "absolute",
            left: -78,
          }}
        ></div>
      </div>

      <div
        className={`absolute border-l-3 overflow-hidden h-[50px] w-[50px] z-10 border-b-3  bg-inherit left-2 ${
          champion?.name
            ? `border-${
                colorByCost[champion?.cost?.[0] as keyof typeof colorByCost]
              }`
            : "border-l-cyan-900 border-b-cyan-900"
        }`}
        style={{
          transform: "scaleY(0.6) rotate(-45deg)",
          bottom: -25,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${champion?.imageUrl})`,
            backgroundSize: "auto",
            transform: "rotate(45deg)",
            backgroundRepeat: "no-repeat",
            bottom: -59,
            width: 100,
            height: 180,
            position: "absolute",
            left: -33.5,
          }}
        ></div>
      </div>
    </button>
  );
};

export default ChampionBuilder;
