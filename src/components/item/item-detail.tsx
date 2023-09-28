import { CombinesItemType, ItemType } from "@/types/item.type";
import Image from "next/image";
import Table, { TData, THead, TRow } from "../table";
import ItemBox from "./item-box";
import generateItemDesc from "@/utils/generateItemDesc";

type Props = {
  item: ItemType;
  combinesItems: CombinesItemType[];
  handleItemClick: (apiName: string) => void;
  components: ItemType[];
  items: ItemType[];
};

export default function ItemDetail(props: Props): JSX.Element {
  const { item, combinesItems, handleItemClick, components, items } = props;

  return (
    <>
      <h2
        className="text-2xl font-bold text-white pb-4 mb-4 border-b 
      border-cyan-800"
      >
        TFT Items Cheat Sheet
      </h2>

      <div className="flex items-center mb-6">
        <Image
          src={item.icon}
          alt={item.name}
          unoptimized
          width={30}
          height={30}
          className="border border-cyan-800 mr-4"
        />

        <span className="text-white text-lg leading-0 font-bold">
          {item.name}
        </span>
      </div>

      <Table>
        <colgroup>
          <col className="w-32" />
        </colgroup>

        <THead>
          <TRow>
            <TData>Recipe</TData>
            <TData>Combines Into</TData>
          </TRow>
        </THead>

        <tbody>
          {combinesItems.map((combinesItem, index) => (
            <TRow key={index}>
              <TData>
                <div className="flex items-center gap-2">
                  <ItemBox
                    item={combinesItem.recipes[0]}
                    handleItemClick={handleItemClick}
                    size={35}
                    components={components}
                    items={items}
                  />
                  <ItemBox
                    item={combinesItem.recipes[1]}
                    handleItemClick={handleItemClick}
                    size={35}
                    components={components}
                    items={items}
                  />
                </div>
              </TData>
              <TData>
                <div className="flex items-center gap-4">
                  <ItemBox
                    item={combinesItem.combine}
                    handleItemClick={handleItemClick}
                    size={35}
                    components={components}
                    items={items}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: generateItemDesc(combinesItem.combine),
                    }}
                  ></div>
                </div>
              </TData>
            </TRow>
          ))}
        </tbody>
      </Table>
    </>
  );
}
