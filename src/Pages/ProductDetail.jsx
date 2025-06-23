import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching products " + err));
  }, [id]);

  if (!product) return <p>Loading product ....</p>;
  return (
    <div style={{padding:'2rem'}}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{height:'300px', objectFit:'contain'}}/>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  )
};

export default ProductDetail;
