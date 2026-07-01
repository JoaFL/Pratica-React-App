import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from "../../contexts/CartContext.jsx";
import { Nav } from 'rsuite';

export default function Header() {

    const { totalItens } = useCart();

    return<>
        <header className={styles.header}>
            <div className={styles.headerBox}>
                <h2>App Legal</h2>
                <p>Melhor app.</p>
            </div>
            <div className={styles.headerBox}>
                <Nav defaultActiveKey="Home">
                    <Nav.Item defaultActiveKey="Home">
                        <Link className={styles.headerLink} to={"/"}>Home</Link>
                    </Nav.Item>
                    <Nav.Item defaultActiveKey="Catalog">
                        <Link className={styles.headerLink} to={"/Catalog"}>Produtos</Link>
                    </Nav.Item>
                    <Nav.Item defaultActiveKey="Cart">
                        <Link className={styles.headerLink} to={"/Cart"}>Carrinho ({totalItens()})</Link>
                    </Nav.Item>
                    <Nav.Item defaultActiveKey="AboutUs">
                        <Link className={styles.headerLink} to={"/AboutUs"}>Sobre nós</Link>
                    </Nav.Item>
                </Nav>
            </div>
        </header>
    </>
}