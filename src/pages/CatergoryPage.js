import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function CatergoryPage() {
  const { id } = useParams();
  const apiUrl = "https://fakestoreapi.com/products/category/" + id;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  if(loading) return "Loading...."

  return (
    <div className="flex flex-wrap justify-between">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}
