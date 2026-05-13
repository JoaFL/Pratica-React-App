import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({id, img, title, description, stock, price}) {
    return <>
    
        <div className={styles.card}>
            <img className={styles.img} src={img} alt={title} />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <Link to={`/Catalog/${id}`}>
                <button className={styles.price}>{stock? `R$ ${price.toFixed(2).replace('.', ',')}` : 'Indisponível'}</button>
            </Link>
        </div>

    </> 
}