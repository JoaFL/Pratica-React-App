import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

function AppRoutes() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Catalog" element={<Catalog/>} />
                <Route path="/Cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;