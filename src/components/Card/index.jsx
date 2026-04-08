import styles from './Card.module.css';

function Card({img, title, description, price}) {
    return <>
    
        <div className={styles.card}>
            <img className={styles.img} src={img} alt={title} />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <button className={styles.price}>R$ {price.toFixed(2).replace('.', ',')}</button>
        </div>

    </>
}

export default Card;