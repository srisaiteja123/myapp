import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Fruit.css';
import Fruitshtml from './Fruitshtml';
import Fruits from './Fruits';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fruitshtml />
  </React.StrictMode>
)