import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import AboutUs from "./pages/AboutUs";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Catalog" element={<Catalog/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
    )
}

export default AppRoutes;