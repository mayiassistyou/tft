import { TraitType } from "@/types/trait.type";

function formatDesc(trait: any, desc: string, index: number) {
  const effectRegex = /@*@(.*?)@*@/g;

  return desc.replace(effectRegex, (_, $1) => {
    const effectKey = $1.split("*")[0];
    const multiplier = +$1.split("*")[1] || 1;

    const effect =
      trait.effects[index].variables[
        effectKey as keyof (typeof trait.effects)[0]
      ];

    return effect ? (effect * multiplier).toFixed() : "";
  });
}

const effectMapping = {
  scaleHealth: "Health",
  scaleAP: "Ability Power",
  scaleAD: "Attack Damage",
  scaleArmor: "Armor",
  scaleMR: "Magic Resist",
  scaleMana: "Mana",
  scaleCrit: "Crit Chance",
  scaleCritMult: "Damage",
  scaleAS: "Attack Speed",
};

export default function generateTraitDesc(trait: TraitType) {
  const traitDescArray = trait.desc.split("(@MinUnits@) ");
  const [desc, ...restDesc] = traitDescArray;

  const generatedDesc = formatDesc(trait, desc, 0);

  const descByLevels =
    restDesc.length === 0
      ? []
      : trait.effects.map((effect, index) => {
          return {
            unit: effect.minUnits,
            desc: restDesc[index]
              ? formatDesc(trait, restDesc[index], index)
                  .replace(/<[^>]*>/g, "")
                  .replace(
                    /%i:([^%]+)%/g,
                    (_: any, $1) =>
                      effectMapping[$1 as keyof typeof effectMapping],
                  )
              : formatDesc(trait, restDesc[0], index)
                  .replace(/<[^>]*>/g, "")
                  .replace(
                    /%i:([^%]+)%/g,
                    (_: any, $1) =>
                      effectMapping[$1 as keyof typeof effectMapping],
                  ),
          };
        });

  return {
    desc: generatedDesc,
    descByLevel: descByLevels,
  };
}
