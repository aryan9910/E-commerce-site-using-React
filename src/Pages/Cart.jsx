import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, deleteFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img src={item.image} alt={item.title} width={60} height={60} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button
                      style={{ padding: "0.25rem, 0.6rem", border: "1px solid #ccc", borderRadius: "4px", background: "#f0f0f0", cursor: "pointer" }}
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      style={{ padding: "0.25rem, 0.6rem", border: "1px solid #ccc", borderRadius: "4px", background: "#f0f0f0", cursor: "pointer" }}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => deleteFromCart(item.id)} style={{ marginTop: "1rem" }}>
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr style={{ margin: "1rem 0" }} />
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
