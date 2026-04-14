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
                    <a className={styles.headerLink} href="#" >Home</a>
                    <a className={styles.headerLink} href="#" >Produtos</a>
                    <a className={styles.headerLink} href="#" >Carrinho</a>
                </nav>
            </div>
        </header>
    </>
}