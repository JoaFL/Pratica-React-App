import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { Button } from 'antd';
import { formatarPreco } from "../../utils/formatarPreco"

export default function Card({ id, img, title, description, stock, price }) {
    return <>

        <Link to={`/Catalog/${id}`} className={styles.link}>
            <div className={styles.card}>

                <img className={styles.img} src={img} alt={title} />
                <Link to={`/Catalog/${id}`}>
                    <Button className={styles.price} type="primary">{formatarPreco(price)}</Button>
                </Link>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>

            </div>
        </Link>

    </>
}