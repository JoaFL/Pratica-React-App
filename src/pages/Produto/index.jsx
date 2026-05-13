import { useParams } from "react-router"
import styles from "./Produto.module.css"
import listaProdutos from "../../data/produtos"

function Produto() {

    const { id } = useParams();
    const produto = listaProdutos.find(produto => produto.id == id);

    if (!produto) {
        return <h2>Produto não encontrado</h2>
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.showcase}>
                    <img className={styles.image} src={produto.imagem} alt={produto.nome} />
                </div>
                <div className={styles.info}>
                    <h2>{produto.nome}</h2>
                    <p className={styles.price}><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
                    <button className={styles.buyButton} disabled={!produto.em_estoque}>Comprar</button>
                    <p className={styles.description}><strong>Descrição:</strong> {produto.desc}</p>
                    <p className={styles.stock}><strong>Em Estoque:</strong> {produto.em_estoque ? "Sim" : "Não"}</p>
                    <p className={styles.id}>ID: {produto.id}</p>
                </div>
            </div>
        </>
    )
}

export default Produto