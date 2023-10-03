import { GiTwoCoins } from "react-icons/gi";
import { TraitType } from "@/types/trait.type";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "../tooltip";
import { ChampionType } from "@/types/champion.type";

type Props = {
  champion: ChampionType;
  championTraits: TraitType[];
  size?: number;
  hideName?: boolean;
};

export default function ChampionBox({
  champion,
  championTraits,
  size = 55,
  hideName = false,
}: Props): JSX.Element {
  const colorByCost = {
    1: "gray-500",
    2: "green-500",
    3: "blue-600",
    4: "violet-600",
    5: "yellow-300",
  };

  function ChampionMoreInfo(): JSX.Element {
    return (
      <div className="flex justify-between items-stretch gap-2 h-full">
        <div className="flex flex-col items-center self-center gap-1 py-2 pl-2">
          <Image
            src={champion.imageUrl}
            alt={champion.name}
            width={50}
            height={50}
            className="border border-cyan-900"
          />
          <p className="text-white font-semibold text-center whitespace-nowrap">
            {champion.name}
          </p>
        </div>
        <div
          className="flex-grow border-x border-cyan-950 flex flex-col
          justify-center p-2"
        >
          {championTraits.map((trait) => (
            <div key={trait.name} className="flex items-center gap-2">
              <Image
                src={trait.imageUrl}
                alt={trait.name}
                width={25}
                height={25}
                className="py-1 opacity-80"
              />
              <span className="text-white">{trait.name}</span>
            </div>
          ))}
        </div>
        <div className="self-center flex items-center gap-1 pr-2">
          <GiTwoCoins />
          <span className="font-semibold">{champion.cost[0]}</span>
        </div>
      </div>
    );
  }

  return (
    <Tooltip content={<ChampionMoreInfo />}>
      <Link href={`/champions/${champion.key.toLowerCase()}`}>
        <div
          className="group flex flex-col gap-2 items-center cursor-pointer
          opacity-80"
        >
          <Image
            src={champion.imageUrl}
            alt={champion.name}
            width={size}
            height={size}
            className={`border border-${
              colorByCost[champion.cost[0] as keyof typeof colorByCost]
            } group-hover:border-amber-600`}
          />
          {hideName ? null : (
            <p className="group-hover:text-white text-center text-sm">
              {champion.name}
            </p>
          )}
        </div>
      </Link>
    </Tooltip>
  );
}
