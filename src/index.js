import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


let props = {
  //1. P:V
  firstName:"Anil",
  surname:"Dollor",
  addr:"Neemuch",
  contact:"9898989898",
  //2. Methods
}

root.render(
  <React.StrictMode>
    <App  {...props} />
  </React.StrictMode>
);
