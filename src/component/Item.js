import React from 'react';

const Item = ({ desc, price, discount, colors, img }) => {
  return (
    <div className="bg-slate-400 w-80 h-48 rounded-md relative">
      <div className="flex-row p-4">
        <img src={img} alt={desc} className="w-72 h-20 object-contain" />
        <p className="font-semibold text-lg">{desc}</p>
        <div className="flex gap-2 mb-3 mt-2">
          {colors.map((e) => (
            <div key={e} className={`p-2 w-4 h-4 bg-${e}-600`}></div>
          ))}
        </div>
        <div className="p-1 bg-amber-300 inline rounded-sm">{`Price : ${price} L.E`}</div>
        {discount ? (
          <div className="absolute p-2 font-semibold bg-orange-600 rounded-full -top-2 -left-2">{`${discount}%`}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Item;
