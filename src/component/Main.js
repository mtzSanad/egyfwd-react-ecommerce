import React from 'react';
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
          <ItemCategory key={e} category={e} customeCls="text-stone-200">
            Item Component To be Developed
          </ItemCategory>
        ))
      }
    </div>
  );
};

export default Main;
