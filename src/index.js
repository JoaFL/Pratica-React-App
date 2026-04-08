import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <h1>Produtos</h1>
      <Card 
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLKFl9f0-nVNgplU_v8PAoSA3y3eYcMUbj6YLq4UNClw47Yyyd9Ym9KexgfLrkIiZZp3wFlCgSqFYEtQDqg0remL0oGf_3njU2o6i9BpvOrApTPdJHG-37zn8"
        title="IFome"
        description="Celular IFome, com processador octa-core, 4GB de RAM e 64GB de armazenamento. Tela de 6.5 polegadas e câmera traseira de 48MP."
        price={999000.99}
      />
      <Card 
        img="https://static.vecteezy.com/ti/fotos-gratis/p2/15584410-banana-podre-e-mofada-em-fundo-branco-gratis-foto.jpeg"
        title="Banana"
        description="Banana fresca e saborosa. Perfeita para smoothies, sobremesas ou para comer pura. Rica em potássio e fibras, é uma escolha saudável e deliciosa. Ideal para lanches rápidos ou para adicionar um toque doce às suas receitas. Aproveite a versatilidade da banana em suas refeições diárias! as bananas são colhidas no auge da maturação para garantir o melhor sabor e qualidade. Experimente a doçura natural e a textura macia das nossas bananas frescas! "
        price={10.00}
      />
    </main>
  </React.StrictMode>
);