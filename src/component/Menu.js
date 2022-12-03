import React from 'react';

const Menu = () => {
  const menuItems = ['Home', 'Add Item', 'Search', 'About'];
  return (
    <nav>
      <ul className="text-stone-100 text-lg my-2">
        {menuItems.map((e) => (
          <li className="my-2 font-bold" key={e}>
            {e}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
