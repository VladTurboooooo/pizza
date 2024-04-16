import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './normalize.css';
import { CartProvider } from './components/Cart/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);