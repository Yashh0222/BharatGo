import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
     <div className="nav-left">
         <Link to="/" className="logo">
        SHDShop
      </Link>

      <div className="links">
        <Link to="/">All</Link>
        <Link to="/?category=clothes">Clothes</Link>
        <Link to="/?category=electronics">Electronics</Link>
        <Link to="/?category=furniture">Furnitures</Link>
        <Link to="/?category=toys">Toys</Link>
      </div>
     </div>

      <div className="right">
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <Link to="/cart">🛒 {cart.length}</Link>
      </div>
    </nav>
  );
}
