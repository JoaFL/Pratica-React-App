import { useParams } from "react-router";
import styles from "./Produto.module.css";
import listaProdutos from "../../data/produtos";
import { useCart } from "../../contexts/CartContext.jsx";
import { Rate, Button } from 'antd';

function Produto() {

  const { adicionarItem } = useCart();
  const { id } = useParams();

  const produto = listaProdutos.find((p) => p.id === Number(id));

  if (!produto) {
    return <h2>Produto não encontrado ou removido.</h2>;
  }

  return (
    <section>
      <div className={styles.container}>

        <div className={styles.showcase}>
          <img className={styles.image} src={produto.imagem} alt={produto.nome} />
        </div>

        <div className={styles.info}>
          <h2>{produto.nome}</h2>
          <p className={styles.price}><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
          {produto.em_estoque ? (
            <> <Button onClick={() => adicionarItem(produto)}>Adicionar ao carrinho</Button> </>
          ) : (
            <p>Produto indisponível</p>
          )}
          <Button className={styles.buyButton} disabled={!produto.em_estoque}>Comprar</Button>
          <p className={styles.description}><strong>Descrição:</strong> {produto.desc}</p>
          <p className={styles.category}>Categoria: {produto.categoria}</p>
          <p className={styles.id}>ID: {produto.id}</p>
        </div>
      </div>
    </section>
  );
}

export default Produto