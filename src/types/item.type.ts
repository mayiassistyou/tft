export type EffectsType = {
  AD?: number;
  ADandAPPerTick?: number;
  Amour?: number;
  AP?: number;
  AS?: number;
  BaseAmp?: number;
  BonusAmp?: number;
  BonusAttackSpeed?: number;
  CritChance?: number;
  Duration?: number;
  HealTickRate?: number;
  HexRangeIncrease?: number;
  HealingPercentPerTickPerStage?: number;
  Health?: number;
  Mana?: number;
  MagicResist?: number;
  PercentMaxHealthDamage?: number;
  PercentDamageIncrease?: number;
  ProcADPercent?: number;
};

export type ItemType = {
  apiName: string;
  accociatedTraits: string[];
  composition: string[];
  desc: string;
  effects: EffectsType;
  from: any;
  icon: string;
  incomtableTraits: [];
  name: string;
  unique: boolean;
};

export type CombinesItemType = {
  recipes: ItemType[];
  combine: ItemType;
};
