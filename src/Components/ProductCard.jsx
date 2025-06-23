import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ border: "1px solid #ddd", padding: "1rem", maxWidth:'100%' }}>
        <img src={product.image} alt={product.title} style={{ height: "150px", objectFit: "contain" }} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
