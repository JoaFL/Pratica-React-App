import { Link } from 'react-router-dom';
import styles from './ConteudoPrincipal.module.css';
import Card from '../Card';
import listaProdutos from '../../data/produtos';

function ConteudoPrincipal() {
    return <>
        <div className={styles.container}>
            {listaProdutos.map((produto) => (
            <>
                <Link to={`/Catalog/${produto.id}`} className={styles.link}>
                    <Card 
                        key={produto.id} 
                        id={produto.id}
                        title={produto.nome} 
                        price={produto.preco} 
                        description={produto.desc} 
                        stock={produto.em_estoque}
                        img={produto.imagem}
                    />
                </Link>
            </> 
            ))}
        </div>
    
    </>
}

export default ConteudoPrincipal;