import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Catalog" element={<Catalog/>} />
            <Route path="/Cart" element={<Cart/>} />
        </Routes>
    )
}

export default AppRoutes;