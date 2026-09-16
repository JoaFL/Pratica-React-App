import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../contexts/CartContext";
import Header from "../components/Header";

export function renderComApp(elemento, {caminho, rota = "/"} = {}) {
    return render(
        <MemoryRouter initialEntries={ rota }>
            <CartProvider>
                <Header />
                <Routes>
                    <Route path={caminho} element={elemento} />
                </Routes>
            </CartProvider>
        </MemoryRouter>
    )
}