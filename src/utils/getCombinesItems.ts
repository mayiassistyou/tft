import { CombinesItemType, ItemType } from "@/types/item.type";

export default function getCombinesItems(
  baseItems: ItemType[],
  combineItems: ItemType[],
  currentItem: ItemType,
): CombinesItemType[] {
  if (currentItem.isFromItem) {
    return baseItems.map((baseItem) => ({
      recipes: [currentItem, baseItem],
      combine: combineItems.find(
        (item: any) =>
          (item.compositions[0] === currentItem.ingameKey &&
            item.compositions[1] === baseItem.ingameKey) ||
          (item.compositions[0] === baseItem.ingameKey &&
            item.compositions[1] === currentItem.ingameKey),
      ) as ItemType,
    }));
  } else {
    const compositions = currentItem?.compositions;

    return [
      {
        recipes: [
          baseItems?.find(
            (item) => item.ingameKey === (compositions ? compositions[0] : ""),
          ) as ItemType,
          baseItems?.find(
            (item) => item.ingameKey === (compositions ? compositions[1] : ""),
          ) as ItemType,
        ],
        combine: currentItem,
      },
    ];
  }

  // if (currentItem.composition.length === 0) {
  //   return baseItems.map((component: any) => {
  //     const recipes = [currentItem, component];
  //     const combine = combineItems.find(
  //       (item: any) =>
  //         (item.composition[0] === currentItem.apiName &&
  //           item.composition[1] === component.apiName) ||
  //         (item.composition[0] === component.apiName &&
  //           item.composition[1] === currentItem.apiName),
  //     );

  //     return { recipes, combine };
  //   });
  // } else {
  //   return [
  //     {
  //       recipes: [
  //         baseItems?.find(
  //           (component: any) =>
  //             component.apiName === currentItem.composition[0],
  //         ),
  //         baseItems?.find(
  //           (component: any) =>
  //             component.apiName === currentItem.composition[1],
  //         ),
  //       ],
  //       combine: currentItem,
  //     },
  //   ];
  // }
}
