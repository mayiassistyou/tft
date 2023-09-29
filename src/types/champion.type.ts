type AbilityType = {
  desc: string;
  icon: string;
  name: string;
  variables: {
    name: string;
    value: number[];
  }[];
};

type StatsType = {
  armor: number;
  attackSpeed: number;
  critChance: number;
  critMultiplier: number;
  damage: number;
  hp: number;
  initialMana: number;
  magicResist: number;
  mana: number;
  range: number;
};

type ChampionType = {
  ability: AbilityType;
  apiName: string;
  characterName: string;
  cost: number;
  icon: string;
  name: string;
  squareIcon: string;
  stats: StatsType;
  tileIcon: string;
  traits: string[];
  slug: string;
};
