import React from 'react';

//Dummy component that takes properties
const Header = (props) => {
  //Using destructring to extract properties
  const { title } = props;

  //Using JSX to get variables values
  return <div>{title}</div>;
};

export default Header;
