import { ItemType } from "@/types/item.type";

export default function generateItemDesc(item: ItemType | undefined): string {
  if (!item?.desc) return "";

  const effectRegex = /@*@(.*?)@*@/g;
  const specRegex = /%i(.*?)%/g;
  return item.desc
    .replace(effectRegex, (_, $1) => {
      const effectKey = $1.split("*")[0];
      const multiplier = +$1.split("*")[1] || 1;

      const effect = item.effects[effectKey as keyof typeof item.effects];

      return effect ? (effect * multiplier).toFixed() : "";
    })
    .replace(specRegex, "");
}
