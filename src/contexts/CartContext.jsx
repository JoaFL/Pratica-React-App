import { createContext, useContext, useState } from "react";

// contexto do carrinho
const CartContext = createContext();

// provider do carrinho
export function CartProvider({ children }) {
    const [itens, setItens] = useState([]);

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
        setItens((prev) => prev.map((item) =>
                item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
            )
        );
    }

    function removerUnidade(id) {
        setItens((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter((item) => item.quantidade > 0)
        );
    }

    function removerItem(id) {
        setItens((prev) => prev.filter(((item) => item.id !== id)))
    }

    function totalItens() {
        return itens.reduce((acc, item) => acc + item.quantidade, 0)
    }

    return (
        <CartContext.Provider value={{
            itens, adicionarItem, adicionarUnidade, removerUnidade, removerItem, totalItens
        }}>{children}</CartContext.Provider>
    )
}

// hook para usar o carrinho
export function useCart() {
    return useContext(CartContext)
}