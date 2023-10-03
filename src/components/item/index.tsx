"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ItemBox from "./item-box";
import Input from "../input";
import Table, { TData, THead, TRow } from "../table";
import { CombinesItemType, ItemType } from "@/types/item.type";
import getCombinesItems from "@/utils/getCombinesItems";
import CharacterHeader from "../character-header";

type ItemProps = {
  baseItems: ItemType[];
  combineItems: ItemType[];
};

export default function Item({
  baseItems,
  combineItems,
}: ItemProps): JSX.Element {
  const initialCombinesItem = getCombinesItems(
    baseItems,
    combineItems,
    baseItems[0],
  );

  const [selectedItemKey, setSelectedItemKey] = useState<string>(
    baseItems[0].key,
  );
  const [selectedItem, setSelectedItem] = useState<ItemType>(baseItems[0]);
  const [combinesItems, setCombinesItems] =
    useState<CombinesItemType[]>(initialCombinesItem);
  const [searchedBaseItems, setSearchedBaseItems] =
    useState<ItemType[]>(baseItems);
  const [searchedCombineItems, setSearchedCombineItems] =
    useState<ItemType[]>(combineItems);

  useEffect(() => {
    const selectedItem = [...baseItems, ...combineItems].find(
      (item) => item.key === selectedItemKey,
    );

    if (selectedItem) {
      setSelectedItem(selectedItem);

      const newCombinesItem = getCombinesItems(
        baseItems,
        combineItems,
        selectedItem,
      );
      setCombinesItems(newCombinesItem);
    }
  }, [selectedItemKey, baseItems, combineItems]);

  function handleItemClick(key: string) {
    if (!key || key === selectedItemKey) return;
    setSelectedItemKey(key);
  }

  function handleInputChange(value: string) {
    const searchedBaseItems = baseItems.filter((baseItem) =>
      baseItem.key
        .trim()
        .toLowerCase()
        .includes(value.trim().toLocaleLowerCase()),
    );

    const searchedCombineItems = combineItems.filter((baseItem) =>
      baseItem.key
        .trim()
        .toLowerCase()
        .includes(value.trim().toLocaleLowerCase()),
    );

    setSearchedBaseItems(searchedBaseItems);
    setSearchedCombineItems(searchedCombineItems);
  }

  return (
    <div className="flex my-8">
      <div className="pr-4 w-1/4">
        <h2 className="text-2xl font-bold text-white mb-6">Choose an Item</h2>

        <Input
          prefix={<FaMagnifyingGlass />}
          placeholder="Search for an item..."
          className="mb-6"
          handleInputChange={handleInputChange}
        />

        <CharacterHeader label="Base Items" />
        <div className="grid grid-cols-6 gap-2 mb-6">
          {searchedBaseItems.map((item: ItemType) => (
            <ItemBox
              key={item.key}
              item={item}
              selectedItemKey={selectedItemKey}
              handleItemClick={handleItemClick}
              hasOpacity
              baseItems={baseItems}
              combineItems={combineItems}
            />
          ))}
        </div>

        <CharacterHeader label="Combined Items" />
        <div className="grid grid-cols-6 gap-2">
          {searchedCombineItems.map((item: ItemType) => (
            <ItemBox
              key={item.key}
              item={item}
              selectedItemKey={selectedItemKey}
              handleItemClick={handleItemClick}
              hasOpacity
              baseItems={baseItems}
              combineItems={combineItems}
            />
          ))}
        </div>
      </div>

      <div className="w-3/4 border-l border-cyan-900 pl-4">
        <h2
          className="text-2xl font-bold text-white pb-4 mb-4 border-b 
      border-cyan-800"
        >
          TFT Items Cheat Sheet
        </h2>

        <div className="flex items-center mb-6">
          <Image
            src={selectedItem.imageUrl}
            alt={selectedItem.name}
            width={30}
            height={30}
            className="border border-cyan-800 mr-4"
          />

          <span className="text-white text-lg leading-0 font-bold">
            {selectedItem.name}
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
            {combinesItems.map((combineItem, index) => (
              <TRow key={index}>
                <TData>
                  <div className="flex items-center gap-2">
                    <ItemBox
                      item={combineItem.recipes[0]}
                      handleItemClick={handleItemClick}
                      size={35}
                      baseItems={baseItems}
                      combineItems={combineItems}
                    />
                    <ItemBox
                      item={combineItem.recipes[1]}
                      handleItemClick={handleItemClick}
                      size={35}
                      baseItems={baseItems}
                      combineItems={combineItems}
                    />
                  </div>
                </TData>
                <TData>
                  <div className="flex items-center gap-4">
                    <ItemBox
                      item={combineItem.combine}
                      handleItemClick={handleItemClick}
                      size={35}
                      baseItems={baseItems}
                      combineItems={combineItems}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: combineItem.combine.desc,
                      }}
                    />
                  </div>
                </TData>
              </TRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
