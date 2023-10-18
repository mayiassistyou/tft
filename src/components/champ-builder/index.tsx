"use client";

import { ChampionType } from "@/types/champion.type";
import { ItemType } from "@/types/item.type";
import { TraitType } from "@/types/trait.type";
import type { DragEvent } from "react";
import { useState } from "react";
import ChampionBox from "../champion/champion-box";
import ChampionBuilderBox from "../champion/champion-builder-box";
import Input from "../input";
import PartialTraits from "./partial-traits";
import Switch from "../switch";

type Props = {
  champions: ChampionType[];
  traits: TraitType[];
  items: ItemType[];
};

function ChampBuilder(props: Props) {
  const { champions, traits, items } = props;

  const [isActive, setIsActive] = useState<boolean>(false);
  const [sorter, setSorter] = useState<"name" | "price">("name");
  const [selectedChampion, setSelectedChampion] = useState<{
    [key: number]: ChampionType;
  }>();

  const handleSorter = (value: typeof sorter) => () => setSorter(value);

  function handleSelectChampion(champ: ChampionType) {
    if (selectedChampion?.hasOwnProperty(29)) return;

    // Why 29?
    // Cause of Kai
    for (let index = 1; index <= 29; index++) {
      if (selectedChampion?.hasOwnProperty(index)) continue;

      setSelectedChampion((prevState) => ({
        ...prevState,
        [index]: champ,
      }));

      break;
    }
  }

  function handleDrop(e: DragEvent<HTMLButtonElement>, index: number) {
    e.preventDefault();

    const data = e.dataTransfer.getData("champ");

    if (!data) return;

    const champ = JSON.parse(data);

    if (champ) {
    }

    setSelectedChampion((prevState) => ({
      ...prevState,
      [index]: champ,
    }));
  }

  function dragStart(
    e: DragEvent<HTMLButtonElement>,
    index: number,
    champion?: ChampionType,
  ) {
    if (!champion) return;

    e.dataTransfer.setData("champ", JSON.stringify(champion));

    delete selectedChampion?.[index];

    setSelectedChampion(selectedChampion);
  }

  function handleClearTeam() {
    setSelectedChampion(undefined);
  }

  return (
    <>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center gap-x-10">
          <h1 className="text-white font-semibold text-xl">TFT Team Builder</h1>
        </div>

        <div className="inline-flex gap-x-4">
          <Switch
            isActive={isActive}
            onActive={() => setIsActive((prevState) => !prevState)}
          />

          <button
            className="py-1 px-5 text-white outline-none border-[1.5px] rounded-sm border-cyan-900 text-sm hover:border-amber-600"
            onClick={handleClearTeam}
          >
            Clear Team
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-cyan-950" />

      <div className="grid grid-cols-12 my-5 gap-x-4">
        <div className="col-span-2">
          <PartialTraits />
        </div>

        <div className="col-span-8 flex flex-col gap-1">
          <div className="my-5 flex items-center justify-center gap-2">
            {[...Array(7)].map((_, index) => (
              <ChampionBuilderBox
                id={index}
                key={index}
                champion={{
                  imageUrl: selectedChampion?.[index + 1]?.imageUrl || "",
                  name: selectedChampion?.[index + 1]?.name || "",
                  cost: selectedChampion?.[index + 1]?.cost || [],
                }}
                onDrop={(e) => handleDrop(e, index + 1)}
                onDragStart={(e) =>
                  dragStart(e, index + 1, selectedChampion?.[index + 1])
                }
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 ml-75px">
            {[...Array(7)].map((_, index) => (
              <ChampionBuilderBox
                id={index}
                key={index + 8}
                champion={{
                  imageUrl: selectedChampion?.[index + 8]?.imageUrl || "",
                  name: selectedChampion?.[index + 8]?.name || "",
                  cost: selectedChampion?.[index + 8]?.cost || [],
                }}
                onDrop={(e) => handleDrop(e, index + 8)}
                onDragStart={(e) =>
                  dragStart(e, index + 8, selectedChampion?.[index + 8])
                }
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-7">
            {[...Array(7)].map((_, index) => (
              <ChampionBuilderBox
                id={index}
                key={index + 15}
                champion={{
                  imageUrl: selectedChampion?.[index + 15]?.imageUrl || "",
                  name: selectedChampion?.[index + 15]?.name || "",
                  cost: selectedChampion?.[index + 15]?.cost || [],
                }}
                onDrop={(e) => handleDrop(e, index + 15)}
                onDragStart={(e) =>
                  dragStart(e, index + 15, selectedChampion?.[index + 15])
                }
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-7 ml-75px">
            {[...Array(7)].map((_, index) => (
              <ChampionBuilderBox
                id={index}
                key={index + 22}
                champion={{
                  imageUrl: selectedChampion?.[index + 22]?.imageUrl || "",
                  name: selectedChampion?.[index + 22]?.name || "",
                  cost: selectedChampion?.[index + 22]?.cost || [],
                }}
                onDrop={(e) => handleDrop(e, index + 22)}
                onDragStart={(e) =>
                  dragStart(e, index + 22, selectedChampion?.[index + 22])
                }
              />
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <PartialTraits />
        </div>

        <div className="col-start-3 col-span-7 mt-10">
          <div className="flex items-center">
            <Input
              inputClassName="bg-inherit text-sm"
              className="focus-within:border-cyan-900 bg-inherit"
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

            <button
              className={`h-[2.2rem] px-3 border-cyan-900 text-xs shrink-0 border border-l-0 ${
                sorter === "name" ? "text-white bg-cyan-900/50" : ""
              }`}
              onClick={handleSorter("name")}
            >
              A-Z
            </button>

            <button
              className={`h-[2.2rem] px-3 border-cyan-900 text-xs shrink-0 border border-l-0 ${
                sorter === "price" ? "text-white bg-cyan-900/50" : ""
              }`}
              onClick={handleSorter("price")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-3 h-3"
              >
                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
              </svg>
            </button>
          </div>

          <div className="border border-1 border-cyan-900 border-t-0 min-h-96 p-2">
            <div className="flex items-center flex-wrap gap-3">
              {champions.map((champion) => {
                const championTraits = champion.traits.map((championTrait) =>
                  traits.find((t) => t.key === championTrait),
                ) as TraitType[];

                const recommentItems =
                  items
                    .filter(
                      (item) =>
                        champion?.recommendItems?.find(
                          (champItem) => item.ingameKey === champItem,
                        ),
                    )
                    .slice(0, 3) || [];

                return (
                  <ChampionBox
                    key={champion.key}
                    champion={champion}
                    championTraits={championTraits}
                    hideName
                    size={42}
                    isLink={false}
                    tooltipPlacement="right"
                    recommendItems={recommentItems}
                    onSelectChampion={() => handleSelectChampion(champion)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-span-3"></div>
      </div>
    </>
  );
}

export default ChampBuilder;
