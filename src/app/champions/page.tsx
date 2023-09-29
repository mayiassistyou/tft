import Champion from "@/components/champion";
import getJsonData from "@/utils/getJsonData";

export default async function Champions(): Promise<JSX.Element> {
  const champions = await getJsonData("champions.json");
  const traits = await getJsonData("traits.json");

  return <Champion champions={champions} traits={traits} />;
}
