import styles from './ConteudoPrincipal.module.css';
import Card from '../Card';
import listaProdutos from '../../data/produtos';
import { Link } from 'react-router-dom';

function ConteudoPrincipal() {
    return <>
        <div className={styles.container}>
            {listaProdutos.map((produto) => (
            <>
                <Card 
                    key={produto.id} 
                    title={produto.nome} 
                    price={produto.preco} 
                    description={produto.desc} 
                    stock={produto.em_estoque}
                    img={produto.imagem}
                />
                <Link to={`/Catalog/${produto.id}`}>Ver detalhes</Link>
            </>
            ))}
        </div>
    
    </>
}

export default ConteudoPrincipal;