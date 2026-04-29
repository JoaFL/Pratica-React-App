import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return<>
        <header className={styles.header}>
            <div className={styles.headerBox}>
                <h2>App Legal</h2>
                <p>Melhor app.</p>
            </div>
            <div className={styles.headerBox}>
                <nav className={styles.headerNav}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Catalog"}>Produtos</Link>
                    <Link to={"/Cart"}>Carrinho</Link>
                </nav>
            </div>
        </header>
    </>
}