import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(()=>{
    try{
    const storedCart=localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart):[];
  }catch(error){
    console.error("Failed to parse local items from storage", error);
    return [];
  }
})

  console.log("Cart Items ", cartItems);

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },[cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prev) => prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0)
    );
  };
  
  const increaseQuantity = (id) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0)
    );
  };

  const deleteFromCart=(id)=>{
    setCartItems(prevItems=> prevItems.filter(item => item.id!==id))
  }

  const value = {
    cartItems,
    addToCart,
    removeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
