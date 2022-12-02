import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//! Testing render hello
//root.render(<h1>Hello</h1>);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
