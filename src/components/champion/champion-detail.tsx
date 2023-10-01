import { ReactNode } from "react";
import Image from "next/image";
import { GiTwoCoins } from "react-icons/gi";
import CharacterHeader from "../character-header";
import Box from "../box";
import { TraitType } from "@/types/trait.type";
import generateTraitDesc from "@/utils/generateTraitDesc";
import NumberCircle from "../number-circle";

type ChampionStatProps = {
  title: string;
  value: ReactNode;
};

type Props = {
  champion: ChampionType;
  traits: (TraitType | undefined)[];
};

function ChampionStat({ title, value }: ChampionStatProps): JSX.Element {
  return (
    <div className="flex items-center gap-2 text-lg my-2">
      <span>{title}:</span>
      <span className="text-white">{value}</span>
    </div>
  );
}

export default function ChampionDetail({
  champion,
  traits,
}: Props): JSX.Element {
  const isPassiveAbility = champion.ability.desc.includes(
    "<spellPassive>Passive:</spellPassive>",
  );

  return (
    <div className="flex my-8">
      <div className="pr-4 w-1/4">
        <div className="w-full flex flex-col items-center gap-4 mb-8">
          <div className="w-32 h-32 rounded-full border border-cyan-900 overflow-hidden">
            <Image
              src={champion.tileIcon}
              alt={champion.name}
              unoptimized
              width={128}
              height={128}
            />
          </div>
          <h1 className="text-white font-bold text-2xl">{champion.name}</h1>
        </div>

        <CharacterHeader label="Stats" textSize="xl" />
        <ChampionStat
          title="Cost"
          value={
            <div className="flex items-center gap-1">
              <span className="text-gray-400">
                <GiTwoCoins />
              </span>
              <span>{champion.cost}</span>
            </div>
          }
        />
        <ChampionStat title="Health" value={champion.stats.hp} />
        <ChampionStat
          title="Mana"
          value={champion.stats.mana > 0 ? champion.stats.mana : "-"}
        />
        <ChampionStat title="Armor" value={champion.stats.armor} />
        <ChampionStat title="Magic Resist" value={champion.stats.magicResist} />
        <ChampionStat title="Damage" value={champion.stats.damage} />
        <ChampionStat
          title="Attack Speed"
          value={champion.stats.attackSpeed.toFixed(2)}
        />
        <ChampionStat
          title="Crit Rate"
          value={`${champion.stats.critChance * 100}%`}
        />
        <ChampionStat title="Range" value={champion.stats.range} />
      </div>

      <div className="pl-4 w-3/4 border-l border-cyan-900">
        <CharacterHeader label="Abilities" />
        <Box className="flex items-start gap-6 mb-4">
          <Image
            src={champion.ability.icon}
            alt={champion.ability.name}
            unoptimized
            height={60}
            width={60}
          />

          <div className="w-full">
            <div className="w-full flex items-center justify-between">
              <div>
                <h2 className="text-lg text-white">{champion.ability.name}</h2>
                <p>{isPassiveAbility ? "Passive" : "Active"}</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4">
                  <Image
                    src="https://rerollcdn.com/ui/icon-mana.svg"
                    alt="mana"
                    unoptimized
                    width={16}
                    height={16}
                    className="pb-[2px]"
                  />
                </div>
                <span>
                  <span className="text-white text-lg font-bold">
                    {champion.stats.initialMana}
                  </span>{" "}
                  / {champion.stats.mana}
                </span>
              </div>
            </div>

            <div className="mt-4 mr-5 text-lg">{champion.ability.desc}</div>
          </div>
        </Box>

        {traits.map((trait) => {
          if (!trait) return null;

          const { desc: traitDesc, descByLevel } = generateTraitDesc(trait);

          return (
            <Box key={trait.apiName} className="flex items-start gap-6 mb-4">
              <Image
                src={trait.icon}
                alt={trait.name}
                unoptimized
                width={32}
                height={32}
              />
              <div className="mr-5 text-lg mt-1">
                <h2 className="text-white font-bold">{trait.name}</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: traitDesc,
                  }}
                  className="mt-4"
                />

                {descByLevel.length > 0
                  ? descByLevel.map((item, index: number) => (
                      <div key={index} className="flex items-center gap-4 my-1">
                        <NumberCircle label={item.unit} />
                        <span className="text-white text-base">
                          {item.desc}
                        </span>
                      </div>
                    ))
                  : null}
              </div>
            </Box>
          );
        })}

        <CharacterHeader label="Synergies" />
      </div>
    </div>
  );
}
