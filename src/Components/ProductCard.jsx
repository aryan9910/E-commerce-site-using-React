import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, removeCart } = useCart();
  const existingItem = cartItems.find((item) => item.id === product.id);
  const quantity = existingItem ? existingItem.quantity : 0;
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", maxWidth: "100%" }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.title} style={{ height: "150px", objectFit: "contain" }} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </Link>
      {quantity === 0 ? (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", alignItems: "center" }}>
          <button onClick={() => removeCart(product)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
