import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
    return (
        <section className={styles.cartPage}>
            <div className={styles.cartBox}>
                <h1>Carrinho</h1>
                <p>Seu carrinho está vazio no momento.</p>
                <p>Adicione produtos ao carrinho para ver os itens aqui.</p>
                <Link className={styles.catalogButton} to="/Catalog">
                    Ver catálogo
                </Link>
            </div>
        </section>
    );
}

export default Cart;