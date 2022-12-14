import React from 'react';

//Using this as wrapper component and it renders the nested components
const ItemCategory = ({ children, category, customeCls }) => {
  return (
    <div className="border-solid border-2 border-purple-300 p-4 m-4 w-full rounded-md">
      <p className="text-pink-600 font-semibold text-2xl mb-3">{category}</p>
      <div className={`${customeCls}`}>{children}</div>
    </div>
  );
};

export default ItemCategory;
