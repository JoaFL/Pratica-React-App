import { useCart } from "../../contexts/CartContext"
import styles from "./Orders.module.css"

function Pedidos() {
    const { pedidos } = useCart();

    if (pedidos.length === 0) return <p>Você ainda não fez nenhum pedido.</p>;

    return (
        <section className={styles.container}>
            <h2>Meus Pedidos</h2>
            <div className={styles.produtos}>
                {pedidos.map((pedido) => (
                    <div key={pedido.id} className={styles.pedido}>
                        <div className={styles.cabecalho}>
                            <strong>Pedido de {pedido.date}</strong>
                            <br />
                            <span className={styles.total}>
                                Total: R$ {pedido.total.toFixed(2)}
                            </span>
                        </div>
                        <hr className={styles.hr} />
                        <ul className={styles.lista}>
                            {pedido.itens.map((item) => (
                                <li key={item.id}>
                                    {item.nome} - {item.quantidade}x - R$
                                    {(item.preco * item.quantidade).toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pedidos