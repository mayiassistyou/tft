import Item from "@/components/item";
import getJsonData from "@/utils/getJsonData";

export default async function Items(): Promise<JSX.Element> {
  const { components, items } = await getJsonData("items.json");

  return <Item components={components} items={items} />;
}
