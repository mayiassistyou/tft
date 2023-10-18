import ChampionBuilderBoard from "@/components/champ-builder/champion-builder-board";
import { ChampionType } from "@/types/champion.type";
import { ItemType } from "@/types/item.type";
import { TraitType } from "@/types/trait.type";
import getJsonData from "@/utils/getJsonData";

async function TeamBuilder() {
  const champions: ChampionType[] = await getJsonData("champions.json");
  const traits: TraitType[] = await getJsonData("traits.json");
  const items: ItemType[] = await getJsonData("items.json");

  return (
    <ChampionBuilderBoard champions={champions} traits={traits} items={items} />
  );
}

export default TeamBuilder;
