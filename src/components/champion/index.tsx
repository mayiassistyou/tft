"use client";

import { GiTwoCoins } from "react-icons/gi";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { TraitType } from "@/types/trait.type";
import ChampionBox from "./champion-box";
import Accordion from "../accordion";
import Checkbox from "../checkbox";
import { useState } from "react";
import Input from "../input";

type CostFilterProps = {
  handleFiltersChange: (filters: string[]) => void;
  filters: string[];
};

type Props = {
  champions: ChampionType[];
  traits: TraitType[];
};

function CostFilter({
  handleFiltersChange,
  filters,
}: CostFilterProps): JSX.Element {
  function handleCostCheckboxChange(value: string, isCheck: boolean) {
    if (isCheck) {
      const newFilters = [...filters, value];

      handleFiltersChange(newFilters);
    } else {
      const newFilters = [...filters].filter((item) => item !== value);

      handleFiltersChange(newFilters);
    }
  }

  return (
    <div>
      <Checkbox
        icon={<GiTwoCoins />}
        title="1"
        value="1"
        selectedValues={filters}
        handleChange={handleCostCheckboxChange}
      />
      <Checkbox
        icon={<GiTwoCoins />}
        title="2"
        value="2"
        selectedValues={filters}
        handleChange={handleCostCheckboxChange}
      />
      <Checkbox
        icon={<GiTwoCoins />}
        title="3"
        value="3"
        selectedValues={filters}
        handleChange={handleCostCheckboxChange}
      />
      <Checkbox
        icon={<GiTwoCoins />}
        title="4"
        value="4"
        selectedValues={filters}
        handleChange={handleCostCheckboxChange}
      />
      <Checkbox
        icon={<GiTwoCoins />}
        title="5"
        value="5"
        selectedValues={filters}
        handleChange={handleCostCheckboxChange}
      />
    </div>
  );
}

function FilterBadge({
  label,
  handleClick,
}: {
  label: string;
  handleClick: (label: string) => void;
}): JSX.Element {
  return (
    <div
      className="w-full flex items-center justify-between bg-green-700
      rounded py-2 px-3 text-white cursor-pointer"
      onClick={() => handleClick(label)}
    >
      <span>{label}</span>
      <FaXmark />
    </div>
  );
}

export default function Champion({ champions, traits }: Props): JSX.Element {
  const [costFilters, setCostFilters] = useState<string[]>([]);

  function handleFiltersChange(filters: string[]) {
    setCostFilters(filters);
  }

  return (
    <div className="flex my-8">
      <div className="pr-4 w-1/4">
        <div
          className="flex justify-between items-center pb-4 mb-4 border-b 
        border-cyan-900"
        >
          <h2 className="text-2xl text-white font-bold">Filters</h2>
          <button>Reset</button>
        </div>

        <Accordion
          title="Cost"
          content={
            <CostFilter
              handleFiltersChange={handleFiltersChange}
              filters={costFilters}
            />
          }
          isOpen
        />
      </div>
      <div className="pl-4 w-3/4 border-l border-cyan-900">
        <div
          className="flex justify-between items-center pb-4 mb-4 border-b 
        border-cyan-900"
        >
          <h2 className="text-2xl text-white font-bold">TFT Champions List</h2>
          <Input
            prefix={<FaMagnifyingGlass />}
            placeholder="Search by name, origin, or class..."
            className="max-w-xs"
          />
        </div>

        {costFilters.length > 0 ? (
          <div className="grid grid-cols-5 gap-2 my-6 p-2">
            {costFilters.map((costFilter) => (
              <FilterBadge
                key={costFilter}
                label={costFilter}
                handleClick={(value: string) => {
                  setCostFilters((prevState) =>
                    [...prevState].filter((item) => item !== value),
                  );
                }}
              />
            ))}
          </div>
        ) : null}

        <div className="grid grid-cols-8 gap-4">
          {champions.map((champion) => {
            const championTraits = champion.traits.map((championTrait) =>
              traits.find((t) => t.name === championTrait),
            ) as TraitType[];

            return (
              <ChampionBox
                key={champion.apiName}
                champion={champion}
                traits={championTraits}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
