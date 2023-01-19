import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Shop from "./Shop";
import Home from "./Home";


const RouteSwitch = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
    )
}

export default RouteSwitch