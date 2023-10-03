export type ItemType = {
  key: string;
  ingameKey: string;
  name: string;
  desc: string;
  fromDesc: string;
  imageUrl: string;
  compositions?: string[];
  isHidden: boolean;
  isFilterHidden: boolean;
  isFromItem: boolean;
  isUnique: boolean;
  isPbe: boolean;
  isNormal: boolean;
  isArtifact: boolean;
  isEmblem: boolean;
  isShimmerscale: boolean;
  isGadgeteen: boolean;
  isZaun: boolean;
  isTurret: boolean;
  isNew: boolean;
};

export type CombinesItemType = {
  recipes: ItemType[];
  combine: ItemType;
};
