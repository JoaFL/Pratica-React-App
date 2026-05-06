import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h2>NotFound</h2>
            <p>A página não foi encontrada.</p>
            <Link to="/" className={styles.link}>Voltar à página inicial</Link>
        </>
    )
}

export default NotFound;