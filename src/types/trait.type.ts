type StyleType = {
  style: string;
  min: number;
  max: number;
};

export type TraitType = {
  key: string;
  ingameKey: string;
  name: string;
  desc: string;
  imageUrl: string;
  blackImageUrl: string;
  whiteImageUrl: string;
  type: "ORIGIN" | "CLASS";
  styles: StyleType;
  stats: {
    [key: string]: string;
  };
  isHidden: boolean;
};
