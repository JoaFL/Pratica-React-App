import { createContext, useContext, useEffect, useState } from "react";

// contexto do carrinho
const CartContext = createContext();

// provider do carrinho
export function CartProvider({ children }) {
    const [itens, setItens] = useState(() => {
        const salvo = localStorage.getItem('carrinho');
        return salvo ? JSON.parse(salvo) : []
    });

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(itens))
    }, [itens])

    const [pedidos, setPedidos] = useState([]);

    function adicionarItem(produto) {
        setItens((prev) => {
            const jaExiste = prev.find((item) => item.id === produto.id);

            if (jaExiste) {
                return prev.map((item) => item.id === produto.id ? {...item, quantidade: item.quantidade + 1} : item);
            }

            return [...prev, {...produto, quantidade: 1}];
        })
    }

    function adicionarUnidade(id) {
        setItens((prev) => 
            prev.map((item) =>
                item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
            )
        );
    }

    function removerUnidade(id) {
        setItens((prev) =>
            prev
                .map((item) =>
                    item.id === id? { ...item, quantidade: item.quantidade - 1 } : item
                )
                .filter((item) => item.quantidade > 0),
        );
    }

    function removerItem(id) {
        setItens((prev) => prev.filter(((item) => item.id !== id)))
    }

    function totalItens() {
        return itens.reduce((acc, item) => acc + item.quantidade, 0)
    }

    function valorTotal() {
        return itens.reduce(
            (acc, item) => acc + item.preco * item.quantidade,
            0,
        );
    }

    function finalizarPedido() {
        if (itens.length === 0) return;

        const novoPedido = {
            id: Date.now(),
            date: new Date().toLocaleDateString("pt-BR"),
            itens: itens,
            total: valorTotal()
        };

        setPedidos((prev) => [...prev, novoPedido]);
        setItens([]);
    }

    return (
        <CartContext.Provider value={{
            itens, adicionarItem, adicionarUnidade, removerUnidade, removerItem, totalItens, valorTotal, finalizarPedido
        }}>{children}</CartContext.Provider>
    )
}

// hook para usar o carrinho
export function useCart() {
    return useContext(CartContext)
}