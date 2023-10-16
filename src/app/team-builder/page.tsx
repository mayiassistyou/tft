import ChampBuilder from "@/components/champ-builder";
import Switch from "@/components/switch";
import { ChampionType } from "@/types/champion.type";
import { ItemType } from "@/types/item.type";
import { TraitType } from "@/types/trait.type";
import getJsonData from "@/utils/getJsonData";

const TeamBuilder = async (): Promise<JSX.Element> => {
  const champions: ChampionType[] = await getJsonData("champions.json");
  const traits: TraitType[] = await getJsonData("traits.json");
  const items: ItemType[] = await getJsonData("items.json");

  return (
    <>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center gap-x-10">
          <h1 className="text-white font-semibold text-xl">TFT Team Builder</h1>
        </div>

        <div className="inline-flex gap-x-4">
          <Switch />

          <button className="py-1 px-5 text-white outline-none border-[1.5px] rounded-sm border-cyan-900 text-sm hover:border-amber-600">
            Clear Team
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-cyan-950" />

      <ChampBuilder champions={champions} traits={traits} items={items} />
    </>
  );
};

export default TeamBuilder;
