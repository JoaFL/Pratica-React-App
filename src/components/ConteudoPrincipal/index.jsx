import styles from './ConteudoPrincipal.module.css';
import Card from '../Card';

function ConteudoPrincipal() {

    const listaProdutos = [
        {id: 1, nome: 'Mouse Gamer', preco: 150.00, em_estoque: true, imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/1551006/0/1551006-0.jpg'},
        {id: 2, nome: 'Teclado Gamer', preco: 200.00, em_estoque: true, imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/1551007/0/1551007-0.jpg'},
        {id: 3, nome: 'Monitor Gamer', preco: 500.00, em_estoque: true, imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/1551008/0/1551008-0.jpg'},
    ]
    return <>
    
        {listaProdutos.map((produto) => (
            <Card 
                key={produto.id} 
                title={produto.nome} 
                price={produto.preco} 
                description={produto.em_estoque} 
                img={produto.imagem}
            />
        ))}
    
    </>
}

export default ConteudoPrincipal;