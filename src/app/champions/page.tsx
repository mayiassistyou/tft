import Champion from "@/components/champion";
import { ChampionType } from "@/types/champion.type";
import { TraitType } from "@/types/trait.type";
import getJsonData from "@/utils/getJsonData";

export default async function Champions(): Promise<JSX.Element> {
  const champions: ChampionType[] = await getJsonData("champions.json");
  const traits: TraitType[] = await getJsonData("traits.json");

  const basicChampions = champions.filter(
    (champion) =>
      !champion.isHidden &&
      !champion.isHiddenLanding &&
      !champion.isHiddenTeamBuilder,
  );

  return <Champion champions={basicChampions} traits={traits} />;
}
