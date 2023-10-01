"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ItemBox from "./item-box";
import Input from "../input";
import Table, { TData, THead, TRow } from "../table";
import { CombinesItemType, ItemType } from "@/types/item.type";
import getCombinesItems from "@/utils/getCombinesItems";
import generateItemDesc from "@/utils/generateItemDesc";
import CharacterHeader from "../character-header";

type ItemProps = {
  components: ItemType[];
  items: ItemType[];
};

export default function Item({ components, items }: ItemProps): JSX.Element {
  const initialCombinesItem = getCombinesItems(
    components,
    items,
    components[0],
  );

  const [selectedItemApiName, setSelectedItemApiName] = useState<string>(
    components[0].apiName,
  );
  const [selectedItem, setSelectedItem] = useState<ItemType>(components[0]);
  const [combinesItems, setCombinesItems] =
    useState<CombinesItemType[]>(initialCombinesItem);
  const [searchedComponents, setSearchedComponents] =
    useState<ItemType[]>(components);
  const [searchedItems, setSearchedItems] = useState<ItemType[]>(items);

  useEffect(() => {
    const selectedItem = [...components, ...items].find(
      (item) => item.apiName === selectedItemApiName,
    );

    if (selectedItem) {
      setSelectedItem(selectedItem);

      const newCombinesItem = getCombinesItems(components, items, selectedItem);
      setCombinesItems(newCombinesItem);
    }
  }, [selectedItemApiName, components, items]);

  function handleItemClick(apiName: string) {
    if (!apiName || apiName === selectedItemApiName) return;
    setSelectedItemApiName(apiName);
  }

  function handleInputChange(value: string) {
    const searchedComponents = components.filter((component) =>
      component.apiName
        .trim()
        .toLowerCase()
        .includes(value.trim().toLocaleLowerCase()),
    );

    const searchedItems = items.filter((item) =>
      item.apiName
        .trim()
        .toLowerCase()
        .includes(value.trim().toLocaleLowerCase()),
    );

    setSearchedComponents(searchedComponents);
    setSearchedItems(searchedItems);
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
          {searchedComponents.map((component: ItemType) => (
            <ItemBox
              key={component.apiName}
              item={component}
              selectedItemApiName={selectedItemApiName}
              handleItemClick={handleItemClick}
              hasOpacity
              components={components}
              items={items}
            />
          ))}
        </div>

        <CharacterHeader label="Combined Items" />
        <div className="grid grid-cols-6 gap-2">
          {searchedItems.map((item: ItemType) => (
            <ItemBox
              key={item.apiName}
              item={item}
              selectedItemApiName={selectedItemApiName}
              handleItemClick={handleItemClick}
              hasOpacity
              components={components}
              items={items}
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
            src={selectedItem.icon}
            alt={selectedItem.name}
            unoptimized
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
