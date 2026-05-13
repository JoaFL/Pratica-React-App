import styles from './ProdutosDestaques.module.css';
import Card from '../Card';
import listaProdutos from '../../data/produtos';

function ProdutosDestaques() {
    const produtosEmEstoque = listaProdutos.filter(produto => produto.em_estoque);
    return <>
        <div className={styles.container}>
            {produtosEmEstoque.slice(0, 3).map((produto) => (
                <Card 
                    key={produto.id} 
                    id={produto.id}
                    title={produto.nome} 
                    price={produto.preco} 
                    description={produto.desc} 
                    stock={produto.em_estoque}
                    img={produto.imagem}
                />
            ))}
        </div>
    
    </>
}

export default ProdutosDestaques;