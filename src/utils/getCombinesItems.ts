export default function getCombinesItems(
  components: any,
  items: any,
  currentItem: any,
) {
  if (currentItem.composition.length === 0) {
    return components.map((component: any) => {
      const recipes = [currentItem, component];
      const combine = items.find(
        (item: any) =>
          (item.composition[0] === currentItem.apiName &&
            item.composition[1] === component.apiName) ||
          (item.composition[0] === component.apiName &&
            item.composition[1] === currentItem.apiName),
      );

      return { recipes, combine };
    });
  } else {
    return [
      {
        recipes: [
          components?.find(
            (component: any) =>
              component.apiName === currentItem.composition[0],
          ),
          components?.find(
            (component: any) =>
              component.apiName === currentItem.composition[1],
          ),
        ],
        combine: currentItem,
      },
    ];
  }
}
