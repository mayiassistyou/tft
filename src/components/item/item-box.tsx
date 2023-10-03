import { ItemType } from "@/types/item.type";
import Image from "next/image";
import Tooltip from "../tooltip";
import getCombinesItems from "@/utils/getCombinesItems";

type Props = {
  item: ItemType;
  selectedItemKey?: string;
  handleItemClick: (key: string) => void;
  size?: number;
  hasOpacity?: boolean;
  baseItems: ItemType[];
  combineItems: ItemType[];
};

export default function ItemBox(props: Props): JSX.Element {
  const {
    item,
    selectedItemKey,
    handleItemClick,
    size = 40,
    hasOpacity = false,
    baseItems,
    combineItems,
  } = props;
  const isSelected = selectedItemKey === item.key;
  let classNames = "border-cyan-900";

  if (isSelected) {
    classNames = "border-amber-600 opacity-100";
  } else if (hasOpacity) {
    classNames = "border-cyan-900 opacity-60";
  }

  function ItemBoxDetail(): JSX.Element {
    const combinesItems = getCombinesItems(baseItems, combineItems, item);

    const intoOrRecipeItems = item.compositions
      ? combinesItems
          ?.find((i: any) => i.combine.key === item.key)
          ?.recipes?.map((recipe: any) => recipe.imageUrl)
      : combinesItems
          ?.filter((i: any) => i.recipes[0]?.key === item.key)
          .map((combine: any) => combine.combine.imageUrl);

    return (
      <div className="w-full">
        <div
          className="flex gap-2 border-b border-cyan-900 px-6 py-4
          mb-2"
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={size}
            height={size}
          />
          <div>
            <p className="text-white font-bold whitespace-nowrap">
              {item.name}
            </p>
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: item.desc,
          }}
          className="text-white border-b border-cyan-900 px-4 py-2 mb-2"
        />

        <div className="flex items-center gap-2 p-2">
          <span>{item.compositions ? "Into:" : "Recipe:"}</span>
          <div className="flex justify-between gap-2">
            {intoOrRecipeItems?.map((i: any, index: number) => (
              <Image key={index} src={i} alt={i} width={20} height={20} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Tooltip content={<ItemBoxDetail />}>
        <div
          className={`w-10 h-10 border hover:border-amber-600
            hover:opacity-100 cursor-pointer
            ${classNames}`}
          onClick={() => handleItemClick(item.key)}
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={size}
            height={size}
          />
        </div>
      </Tooltip>
    </>
  );
}
