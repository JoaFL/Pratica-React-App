import styles from './ConteudoPrincipal.module.css';
import Card from '../Card';

function ConteudoPrincipal() {

    const listaProdutos = [
        {id: 1, nome: 'Mouse Gamer', preco: 150.00, em_estoque: true, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rVKSH-Wt0aYnXt4TOlS_NqnyzfKCxnL62A&s'},
        {id: 2, nome: 'Teclado Gamer', preco: 200.00, em_estoque: true, imagem: 'https://b2bleonorashop.vtexassets.com/arquivos/ids/157992-800-auto?v=637698325339870000&width=800&height=auto&aspect=true'},
        {id: 3, nome: 'Monitor Gamer', preco: 500.00, em_estoque: true, imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/jpezkcdl/file.png'},
    ]
    return <>
        <div className={styles.container}>
            {listaProdutos.map((produto) => (
                <Card 
                    key={produto.id} 
                    title={produto.nome} 
                    price={produto.preco} 
                    description={produto.em_estoque} 
                    img={produto.imagem}
                />
            ))}
        </div>
    
    </>
}

export default ConteudoPrincipal;