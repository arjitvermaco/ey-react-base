import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ApiCall() {
  let apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function calculateCartTotal() {
    let total = cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    setCartTotal(total);
  }

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  function addToCart(product) {
    const isProductInCart = cart.includes(product);
    if (!isProductInCart) {
      setCart([...cart, product]);
    }
  }

  async function getProducts() {
    console.log("Calling api");
    const response = await fetch(apiUrl);
    console.log(response);
    const data = await response.json();
    console.log("Data from api", data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Cart Amout : {cartTotal}</h1>
      <h1>Cart</h1>
      {cart.length > 0
        ? cart.map((cartItem) => {
            return <p key={cartItem.id}>{cartItem.title}</p>;
          })
        : "No Items in cart"}

      <div className="flex flex-wrap gap-5 justify-center">
        {products.length > 0
          ? products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  addToCart={addToCart}
                  product={item}
                />
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}
