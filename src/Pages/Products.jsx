import { useEffect, useState } from "react";
import React from "react";
import ProductCard from "../Components/ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products " + err));
  }, []);

  return (
    <div style={{ width:'100%', padding:'1rem'}}>
      <h1>All Products</h1>
      <div style={{ display: "grid", paddingTop: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
