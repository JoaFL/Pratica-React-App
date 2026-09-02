import { createContext, useContext, useState, useEffect } from "react";
import * as regras from "../utils/Cart";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [itens, setItens] = useState(() => {
        const salvo = localStorage.getItem("Cart");
        return salvo ? JSON.parse(salvo) : [];
    });

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(itens));
    }, [itens]);

    const [pedidos, setPedidos] = useState([]);

    function adicionarItem(produto) {
        setItens((prev) => regras.adicionarProduto(prev, produto));
    }

    function removerItem(id) {
        setItens((prev) => regras.removerProduto(prev, id));
    }

    function aumentarQuantidade(id) {
        setItens((prev) => regras.aumentarQuantidade(prev, id));
    }

    function diminuirQuantidade(id) {
        setItens((prev) => regras.diminuirQuantidade(prev, id));
    }

    function totalItens() {
        return regras.contarItens(itens);
    }

    function valorTotal() {
        return regras.calcularTotal(itens);
    }

    function finalizarPedido() {
        if (itens.length === 0) return;

        const novoPedido = {
            id: Date.now(),
            data: new Date().toLocaleDateString("pt-BR"),
            itens: itens,
            total: valorTotal(),
        };

        setPedidos((prev) => [...prev, novoPedido]);
        setItens([]);
    }

    return (
        <CartContext.Provider
        value={{
            itens,
            pedidos,
            adicionarItem,
            removerItem,
            totalItens,
            valorTotal,
            aumentarQuantidade,
            diminuirQuantidade,
            finalizarPedido,
        }}>
        {children}
    </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}