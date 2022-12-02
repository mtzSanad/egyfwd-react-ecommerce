import React from 'react';
import Item from './Item';
import ItemCategory from './ItemCategory';

const Main = () => {
  const itemsCategory = ['T-shirts', 'Dress', 'Jeans', 'Shoes'];
  return (
    <div className="w-full">
      {
        /** 
      <ItemCategory category="T-shirts" customeCls="text-stone-200">
        Item Component To be Developed
      </ItemCategory>
      */
        itemsCategory.map((e) => (
          <ItemCategory
            key={e}
            category={e}
            customeCls="flex gap-4"
            className=""
          >
            <Item price={50} desc="T-shirt1" />
            <Item price={100} desc="T-shirt1" />
            <Item price={30} desc="T-shirt1" />
          </ItemCategory>
        ))
      }
    </div>
  );
};

export default Main;
