import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <hr />
          <h3>Total: ${total}</h3>

         
          <Link to="/checkout">
            <button style={{ marginTop: "15px" }}>
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
