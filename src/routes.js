import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Produto from "./pages/Produto";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Catalog" element={<Catalog/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/Catalog/:id" element={<Produto/>} />
        </Routes>
    )
}

export default AppRoutes;