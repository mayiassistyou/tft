"use client";

import { useState } from "react";
import ChampionBuilderBox from "../champion/champion-builder-box";
import Input from "../input";
import PartialTraits from "./partial-traits";
import { ChampionType } from "@/types/champion.type";
import { TraitType } from "@/types/trait.type";
import { ItemType } from "@/types/item.type";
import ChampionBox from "../champion/champion-box";

type Props = {
  champions: ChampionType[];
  traits: TraitType[];
  items: ItemType[];
};

const ChampBuilder = (props: Props) => {
  const { champions, traits, items } = props;

  const [sorter, setSorter] = useState<"name" | "price">("name");

  const handleSorter = (value: "name" | "price") => () => setSorter(value);

  return (
    <div className="grid grid-cols-12 my-5 gap-x-4">
      <div className="col-span-2">
        <PartialTraits />
      </div>

      <div className="col-span-8 flex flex-col gap-1">
        <div className="my-5 flex items-center justify-center gap-2">
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 ml-75px">
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
        </div>

        <div className="flex items-center justify-center gap-2 mt-7">
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
        </div>

        <div className="flex items-center justify-center gap-2 mt-7 ml-75px">
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
          <ChampionBuilderBox />
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

              return (
                <ChampionBox
                  key={champion.key}
                  champion={champion}
                  championTraits={championTraits}
                  hideName
                  size={42}
                  isLink={false}
                  tooltipPlacement="right"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="col-span-3"></div>
    </div>
  );
};

export default ChampBuilder;
