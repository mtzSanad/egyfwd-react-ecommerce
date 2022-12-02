import React from 'react';

const Item = ({ desc, price, discount, colors, category, img }) => {
  return (
    <div className="bg-slate-400 w-80 h-44 rounded-md">
      <div className="flex-row">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_960_720.png"
          alt="asdf"
          className="w-72 h-24 object-contain"
        />
        <p>{desc}</p>
        <div>colors</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default Item;
