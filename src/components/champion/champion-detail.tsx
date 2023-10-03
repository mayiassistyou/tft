import { ReactNode } from "react";
import Image from "next/image";
import { GiTwoCoins } from "react-icons/gi";
import { TraitType } from "@/types/trait.type";
import { ChampionType } from "@/types/champion.type";
import { ItemType } from "@/types/item.type";
import NumberCircle from "../number-circle";
import Box from "../box";
import CharacterHeader from "../character-header";
import ChampionBox from "./champion-box";

type ChampionStatProps = {
  title: string;
  value: ReactNode;
};

type Props = {
  champion: ChampionType;
  championTraits: TraitType[];
  synergies: {
    traitApiName: string;
    traitIcon: string;
    champions: ChampionType[];
  }[];
  items: ItemType[];
};

function ChampionStat({ title, value }: ChampionStatProps): JSX.Element {
  return (
    <div className="flex items-center gap-2 my-2">
      <span>{title}:</span>
      <span className="text-white">{value}</span>
    </div>
  );
}

export default function ChampionDetail({
  champion,
  championTraits,
  synergies,
  items,
}: Props): JSX.Element {
  function gio(key: string) {
    console.log({ key });
  }

  return (
    <div className="flex my-8">
      <div className="pr-4 w-1/4">
        <div className="w-full flex flex-col items-center gap-4 mb-8">
          <div className="w-32 h-32 rounded-full border border-cyan-900 overflow-hidden">
            <Image
              src={champion.imageUrl}
              alt={champion.name}
              width={128}
              height={128}
            />
          </div>
          <h1 className="text-white font-bold text-2xl">{champion.name}</h1>
        </div>

        <CharacterHeader label="Item build" textSize="xl" />
        <Box className="rounded-sm my-4">
          <div className="flex justify-center items-center gap-4 p-3">
            {champion.recommendItems.slice(0, 3).map((recommendItem) => {
              const item = items.find(
                (i) => i.ingameKey === recommendItem,
              ) as ItemType;

              return (
                <Image
                  key={recommendItem}
                  src={item.imageUrl}
                  alt={item.name}
                  width={40}
                  height={40}
                />
              );
            })}
          </div>
        </Box>

        <CharacterHeader label="Stats" textSize="xl" />
        <ChampionStat
          title="Cost"
          value={
            <div className="flex items-center gap-1">
              <span className="text-gray-400">
                <GiTwoCoins />
              </span>
              <span>{champion.cost[0]}</span>
            </div>
          }
        />
        <ChampionStat
          title="Health"
          value={`${champion.health[0]} / ${champion.health[1]} / ${champion.health[2]}`}
        />
        <ChampionStat
          title="Mana"
          value={champion.skill.skillMana > 0 ? champion.skill.skillMana : "-"}
        />
        <ChampionStat title="Armor" value={champion.armor} />
        <ChampionStat title="Magic Resist" value={champion.magicalResistance} />
        <ChampionStat
          title="DPS"
          value={`${champion.damagePerSecond[0]} / ${champion.damagePerSecond[1]} / ${champion.damagePerSecond[2]}`}
        />
        <ChampionStat
          title="Damage"
          value={`${champion.attackDamage[0]} / ${champion.attackDamage[1]} / ${champion.attackDamage[2]}`}
        />
        <ChampionStat title="Attack Speed" value={champion.attackSpeed} />
        <ChampionStat title="Range" value={champion.attackRange} />
      </div>

      <div className="pl-4 w-3/4 border-l border-cyan-900">
        <CharacterHeader label="Abilities" textSize="xl" />
        <Box className="flex items-start gap-6 p-5 mb-4">
          <Image
            src={champion.skill.imageUrl}
            alt={champion.skill.name}
            height={60}
            width={60}
          />

          <div className="w-full">
            <div className="w-full flex items-center justify-between">
              <div>
                <h2 className="text-lg text-white">{champion.skill.name}</h2>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4">
                  <Image
                    src="https://rerollcdn.com/ui/icon-mana.svg"
                    alt="mana"
                    width={16}
                    height={16}
                    className="pb-[2px]"
                  />
                </div>
                <span>
                  <span className="text-white text-lg font-bold">
                    {champion.skill.startingMana}
                  </span>{" "}
                  / {champion.skill.skillMana}
                </span>
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: champion.skill.desc,
              }}
              className="mt-4 mr-5 text-lg"
            />
          </div>
        </Box>

        {championTraits.map((trait) => {
          if (!trait) return null;

          return (
            <Box key={trait.key} className="flex items-start gap-6 p-5 mb-4">
              <Image
                src={trait.imageUrl}
                alt={trait.name}
                width={32}
                height={32}
              />
              <div className="mr-5 text-lg mt-1">
                <h2 className="text-white font-bold">{trait.name}</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: trait.desc,
                  }}
                  className="my-4"
                />

                {Object.keys(trait.stats).map((key) => (
                  <div key={key} className="flex items-center gap-4 my-1">
                    <NumberCircle label={+key} />
                    <div>{trait.stats[key]}</div>
                  </div>
                ))}
              </div>
            </Box>
          );
        })}

        <CharacterHeader label="Synergies" textSize="xl" />
        {synergies.map((synergy) => (
          <Box
            key={synergy.traitApiName}
            className="flex items-center p-5 my-4 gap-8"
          >
            <Image
              src={synergy.traitIcon}
              alt={synergy.traitApiName}
              height={28}
              width={28}
            />
            <div className="grid grid-cols-10 gap-6">
              {synergy.champions.map((champion) => (
                <ChampionBox
                  key={champion.key}
                  champion={champion}
                  championTraits={championTraits}
                  size={50}
                  hideName
                />
              ))}
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
}
