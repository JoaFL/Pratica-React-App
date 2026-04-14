import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import ConteudoPrincipal from './components/ConteudoPrincipal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <h1>Produtos</h1>
      <ConteudoPrincipal />

    </main>
  </React.StrictMode>
);