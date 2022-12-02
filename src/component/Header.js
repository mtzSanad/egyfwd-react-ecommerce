import React from 'react';

//Dummy component that takes properties
const Header = (props) => {
  //Using destructring to extract properties
  const { title } = props;

  //Using JSX to get variables values
  return (
    <div className="px-6 py-3 bg-gray-900 text-purple-500 text-2xl font-extrabold">
      {title}
    </div>
  );
};

export default Header;
