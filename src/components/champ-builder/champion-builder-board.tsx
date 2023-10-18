"use client";

import ChampBuilder from "@/components/champ-builder";
import Switch from "@/components/switch";
import { ChampionType } from "@/types/champion.type";
import { ItemType } from "@/types/item.type";
import { TraitType } from "@/types/trait.type";
import { useState } from "react";

type Props = {
  champions: ChampionType[];
  traits: TraitType[];
  items: ItemType[];
};

const ChampionBuilderBoard = (props: Props) => {
  const { champions, items, traits } = props;

  return <ChampBuilder champions={champions} traits={traits} items={items} />;
};

export default ChampionBuilderBoard;
