import React from 'react';
import Header from './component/Header';

const App = () => {
  //Adding the basic component layout
  return (
    <div className="bg-slate-800 h-screen">
      <Header title="e-Commerce" />
      <div className="container mx-auto grid grid-cols-12 gap-1">
        <div className="col-span-2">Menu</div>
        <div className="col-span-1">Main</div>
      </div>
    </div>
  );
};

export default App;
