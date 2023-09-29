import { CombinesItemType, ItemType } from "@/types/item.type";
import Image from "next/image";
import Tooltip from "../tooltip";
import generateItemDesc from "@/utils/generateItemDesc";
import getCombinesItems from "@/utils/getCombinesItems";

type Props = {
  item: ItemType;
  selectedItemApiName?: string;
  handleItemClick: (apiName: string) => void;
  size?: number;
  hasOpacity?: boolean;
  components: ItemType[];
  items: ItemType[];
};

export default function ItemBox(props: Props): JSX.Element {
  const {
    item,
    selectedItemApiName,
    handleItemClick,
    size = 40,
    hasOpacity = false,
    components,
    items,
  } = props;
  const isSelected = selectedItemApiName === item.apiName;
  let classNames = "border-cyan-900";

  if (isSelected) {
    classNames = "border-amber-600 opacity-100";
  } else if (hasOpacity) {
    classNames = "border-cyan-900 opacity-60";
  }

  function ItemBoxDetail(): JSX.Element {
    const combinesItems = getCombinesItems(components, items, item);
    const isComponentItem = item.composition.length === 0;

    const intoOrRecipeItems = isComponentItem
      ? combinesItems
          ?.filter((i: any) => i.recipes[0]?.apiName === item.apiName)
          .map((combine: any) => combine.combine.icon)
      : combinesItems
          ?.find((i: any) => i.combine.apiName === item.apiName)
          ?.recipes?.map((recipe: any) => recipe?.icon);

    return (
      <>
        <div className="flex gap-2 w-full border-b border-cyan-900 px-6 py-4 mb-2">
          <Image
            src={item.icon}
            alt={item.name}
            unoptimized
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
            __html: generateItemDesc(item),
          }}
          className="text-white border-b border-cyan-900 px-4 py-2 mb-2"
        ></div>

        <div className="flex items-center gap-2 p-2">
          <span>{isComponentItem ? "Into:" : "Recipe:"}</span>
          <div className="flex gap-2">
            {intoOrRecipeItems?.map((i: any, index: number) => (
              <Image
                key={index}
                src={i}
                alt={i}
                unoptimized
                width={20}
                height={20}
              />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Tooltip content={<ItemBoxDetail />}>
        <div
          className={`w-10 h-10 border hover:border-amber-600
            hover:opacity-100 cursor-pointer
            ${classNames}`}
          onClick={() => handleItemClick(item.apiName)}
        >
          <Image
            src={item.icon}
            alt={item.name}
            unoptimized
            width={size}
            height={size}
          />
        </div>
      </Tooltip>
    </>
  );
}
