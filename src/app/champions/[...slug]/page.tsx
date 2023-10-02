import getJsonData from "@/utils/getJsonData";
import { notFound } from "next/navigation";
import ChampionDetail from "@/components/champion/champion-detail";
import { TraitType } from "@/types/trait.type";

type Props = {
  params: { slug: string };
};

export default async function Champion({
  params,
}: Props): Promise<JSX.Element> {
  const champions: ChampionType[] = await getJsonData("champions.json");
  const traits: TraitType[] = await getJsonData("traits.json");

  const champion = champions.find(
    (champ: ChampionType) => champ.slug === params.slug[0],
  );

  if (!champion) notFound();

  const championTraits = champion.traits.map((trait) =>
    traits.find((t) => t.name === trait),
  );

  const synergies = championTraits.map((trait) => ({
    traitApiName: trait?.apiName || "",
    traitIcon: trait?.icon || "",
    champions: [...champions].filter(
      (champion) =>
        champion.traits.includes(trait?.name || "") &&
        champion.slug !== params.slug[0],
    ),
  }));

  return (
    <ChampionDetail
      champion={champion}
      championTraits={championTraits as TraitType[]}
      synergies={synergies}
    />
  );
}
