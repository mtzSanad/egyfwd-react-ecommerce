import React from 'react';
import Item from './Item';
import ItemCategory from './ItemCategory';

const Main = ({ items }) => {
  const itemsCategory = [];
  Object.keys(items).map((k) => itemsCategory.push(k));
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
            {items[e].map((i) => (
              <Item
                key={i.desc}
                price={i.price}
                desc={i.desc}
                colors={i.colors}
                img={i.img}
                discount={i.discount}
              />
            ))}
          </ItemCategory>
        ))
      }
    </div>
  );
};

export default Main;
