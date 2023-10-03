import getJsonData from "@/utils/getJsonData";
import { notFound } from "next/navigation";
import { TraitType } from "@/types/trait.type";
import { ChampionType } from "@/types/champion.type";
import { ItemType } from "@/types/item.type";
import ChampionDetail from "@/components/champion/champion-detail";

type Props = {
  params: { slug: string };
};

export default async function Champion({
  params: { slug },
}: Props): Promise<JSX.Element> {
  const champions: ChampionType[] = await getJsonData("champions.json");
  const traits: TraitType[] = await getJsonData("traits.json");
  const items: ItemType[] = await getJsonData("items.json");

  const champion = champions.find(
    (champ: ChampionType) => champ.key.toLowerCase() === slug,
  );

  if (!champion) notFound();

  const championTraits = champion.traits.map((trait) =>
    traits.find((t) => t.key === trait),
  );

  const synergies = championTraits.map((trait) => ({
    traitApiName: trait?.key || "",
    traitIcon: trait?.imageUrl || "",
    champions: [...champions].filter(
      (champion) =>
        champion.traits.includes(trait?.name || "") &&
        champion.key.toLowerCase() !== slug,
    ),
  }));

  return (
    <ChampionDetail
      champion={champion}
      championTraits={championTraits as TraitType[]}
      synergies={synergies}
      items={items}
    />
  );
}
