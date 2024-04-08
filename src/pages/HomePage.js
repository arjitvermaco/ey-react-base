import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const apiUrl = "https://fakestoreapi.com/products"
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  async function getAllProducts(){
    const res = await fetch(apiUrl)
    const data = await res.json()
    setProducts(data)
    setLoading(false)
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  if(loading) return "Loading...."


  return (
    <div className='flex flex-wrap justify-between'>
      {products.map((product)=>{
        return(
          <ProductCard product={product} key={product.id}/>
        )
      })}
    </div>
  )
}
