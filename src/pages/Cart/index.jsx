import styles from "./Cart.module.css"
import { useCart } from "../../contexts/CartContext";

function Cart() {
    const { itens, adicionarUnidade, removerUnidade, removerItem, valorTotal, finalizarPedido } = useCart();

    if (itens.length === 0) {
        return <p>Seu carrinho está vazio</p>;
    }

    return (
        <section className={styles.cartPage}>
            <h2 className={styles.title}>Carrinho</h2>

            {itens.map((item) => (
                <div className={styles.item} key={item.id}>

                    <div className={styles.desc}>
                        <strong className={styles.Name}>{item.nome}</strong> 
                         - {item.quantidade}x - R{(item.preco * item.quantidade).toFixed(2)}
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.decreaseButton} onClick={() => removerUnidade(item.id)}>-</button>

                        <button className={styles.addButton} onClick={() => adicionarUnidade(item.id)}>+</button>

                        <button className={styles.removeButton} onClick={() => removerItem(item.id)}>Remover</button>
                    </div>
                </div>
            ))}

            <div>
                <span>
                    Total: R${valorTotal()}.
                </span>
                <button onClick={finalizarPedido()}>Finalizar Pedido</button>
            </div>
        </section>
    );
}

export default Cart;