import Item from "@/components/item";
import { ItemType } from "@/types/item.type";
import getJsonData from "@/utils/getJsonData";

export default async function Items(): Promise<JSX.Element> {
  const items: ItemType[] = await getJsonData("items.json");
  const baseItems = items.filter((item) => item.isFromItem);
  const combineItems = items
    .filter((item) => item.compositions)
    .sort((a, b) => (a.isEmblem === b.isEmblem ? 0 : a.isEmblem ? -1 : 1));

  return <Item baseItems={baseItems} combineItems={combineItems} />;
}
