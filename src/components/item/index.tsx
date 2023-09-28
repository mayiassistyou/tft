"use client";

import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CombinesItemType, ItemType } from "@/types/item.type";
import ItemBox from "./item-box";
import ItemDetail from "./item-detail";
import Input from "../input";
import getCombinesItems from "@/utils/getCombinesItems";

type ItemHeadingProps = {
  label: string;
};

function ItemHeading({ label }: ItemHeadingProps): JSX.Element {
  return (
    <div className="border-b border-cyan-900 mb-4 py-1">
      <span
        className="text-white text-lg font-bold px-2 py-1 border-b-4
      border-amber-600"
      >
        {label}
      </span>
    </div>
  );
}

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
  }, [selectedItemApiName]);

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

        <ItemHeading label="Base Items" />
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

        <ItemHeading label="Combined Items" />
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
        <ItemDetail
          item={selectedItem}
          combinesItems={combinesItems}
          handleItemClick={handleItemClick}
          components={components}
          items={items}
        />
      </div>
    </div>
  );
}
