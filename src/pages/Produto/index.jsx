import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import listaProdutos from "../../data/produtos";
import { useCart } from "../../contexts/CartContext.jsx";
import { Button } from "antd";

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
        <section className={styles.showcase}>
          <img className={styles.image} src={produto.imagem} alt={produto.nome} />
        </section>

        <div className={styles.info}>
          <header>
            <h2>{produto.nome}</h2>
          </header>

          <section>
            <p className={styles.price}><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
          </section>

          <section>
            <Button disabled={!produto.em_estoque} onClick={() => adicionarItem(produto)}>Adicionar ao carrinho</Button>

            <Button className={styles.buyButton} disabled={!produto.em_estoque}>
              Comprar
            </Button>
          </section>

          <section>
            <p className={styles.description}><strong>Descrição:</strong> {produto.desc}</p>
            <p className={styles.category}>Categoria: {produto.categoria}</p>
            <p className={styles.id}>ID: {produto.id}</p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Produto