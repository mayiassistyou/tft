import { GiTwoCoins } from "react-icons/gi";
import { TraitType } from "@/types/trait.type";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "../tooltip";

type Props = {
  champion: ChampionType;
  traits: TraitType[];
};

export default function ChampionBox({ champion, traits }: Props): JSX.Element {
  const colorByCost = {
    1: "gray-500",
    2: "green-500",
    3: "blue-600",
    4: "violet-700",
    5: "yellow-300",
  };

  function ChampionBoxDetail(): JSX.Element {
    return (
      <div className="flex justify-between items-stretch gap-2 h-full">
        <div className="flex flex-col items-center self-center gap-1 py-2 pl-2">
          <Image
            src={champion.tileIcon}
            alt={champion.name}
            unoptimized
            width={50}
            height={50}
            className="border border-cyan-900"
          />
          <p className="text-white font-semibold">{champion.name}</p>
        </div>
        <div
          className="flex-grow border-x border-cyan-950 flex flex-col
          justify-center p-2"
        >
          {traits.map((trait) => (
            <div key={trait.name} className="flex items-center gap-2">
              <Image
                src={trait.icon}
                alt={trait.name}
                unoptimized
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
          <span className="font-semibold">{champion.cost}</span>
        </div>
      </div>
    );
  }

  return (
    <Tooltip content={<ChampionBoxDetail />}>
      <Link href={`/champions/${champion.slug}`}>
        <div
          className="group flex flex-col gap-1 items-center cursor-pointer
          opacity-80"
        >
          <Image
            src={champion.tileIcon}
            alt={champion.name}
            unoptimized
            width={55}
            height={55}
            className={`border border-${
              colorByCost[champion.cost as keyof typeof colorByCost]
            } group-hover:border-amber-600`}
          />
          <p className="group-hover:text-white">{champion.name}</p>
        </div>
      </Link>
    </Tooltip>
  );
}