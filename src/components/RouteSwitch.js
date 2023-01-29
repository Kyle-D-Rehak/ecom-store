import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Shop from "./Shop";
import Home from "./Home";


const RouteSwitch = (props) => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop cart={props.cart} setCart={props.setCart} />} />
                <Route path="/cart" element={<Cart cart={props.cart} setCart={props.setCart} />} />
            </Routes>
    )
}

export default RouteSwitch