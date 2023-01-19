import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/">
                Home
            </Link>
            <Link to="/shop" relative="path">
                Shop
            </Link>
            <Link to="/cart" relative="path">
                Cart
            </Link>
        </div>
         
    )
}

export default Header 