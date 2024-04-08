import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let categoriesUrl = "https://fakestoreapi.com/products/categories";
  const [allcategories, setAllCategories] = useState([]);

  async function getAllCategories() {
    const res = await fetch(categoriesUrl);
    const data = await res.json();
    setAllCategories(data);
  }
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <header className="bg-blue-500 h-12 flex justify-between items-center text-white">
        <Link to="/">
          <h1>MyEcomStore</h1>
        </Link>

        <div>
          {allcategories.map((category) => {
            return (
              <Link className=" ml-6 capitalize" to={`/category/${category}`}>
                {category}
              </Link>
            );
          })}
        </div>
      </header>
    </div>
  );
}
