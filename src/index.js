import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

import AppRoutes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <Header />
      <AppRoutes classname="page" />
      <Footer />
    </CartProvider>
    </BrowserRouter> 
  </React.StrictMode>
);