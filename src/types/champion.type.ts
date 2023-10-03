export type SkillType = {
  name: string;
  imageUrl: string;
  desc: string;
  startingMana: number;
  skillMana: number;
  stats: string[];
};

export type ChampionType = {
  key: string;
  ingameKey: string;
  name: string;
  imageUrl: string;
  traits: string[];
  isHidden: boolean;
  isHiddenGuide: boolean;
  isHiddenLanding: boolean;
  isHiddenTeamBuilder: boolean;
  isPbe: boolean;
  isRyze: boolean;
  cost: number[];
  health: number[];
  attackDamage: number[];
  damagePerSecond: number[];
  attackRange: number;
  attackSpeed: number;
  armor: number;
  magicalResistance: number;
  skill: SkillType;
  recommendItems: string[];
};
