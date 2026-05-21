import styles from './ConteudoPrincipal.module.css';
import Card from '../Card';
import listaProdutos from '../../data/produtos';

function ConteudoPrincipal() {
    return <>
        <div className={styles.container}>
            {listaProdutos.map((produto) => (
            <>
                <Card 
                    key={produto.id} 
                    id={produto.id}
                    title={produto.nome} 
                    price={produto.preco} 
                    description={produto.desc}
                    stock={produto.em_estoque}
                    img={produto.imagem}
                />
            </> 
            ))}
        </div>
    
    </>
}

export default ConteudoPrincipal;