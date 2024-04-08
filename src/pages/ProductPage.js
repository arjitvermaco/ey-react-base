import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../context/CartContext'

export default function ProductPage() {
  const {id} = useParams()
  const apiUrl = "https://fakestoreapi.com/products/"+id
  const [product,setProduct] = useState({})
  const [loading,setLoading] = useState(true)

  const cartContext = useContext(CartContext)
  async function getProductData(){

    const response = await fetch(apiUrl)
    const data = await response.json()
    setProduct(data)
    setLoading(false)
  }

  useEffect(()=>{
    getProductData()
  },[])

  if(loading) return "Loading...."

  function addToCart(){
    cartContext.setUserCart([...cartContext.userCart,product])
  }


  return (
    <div className='mt-4 flex flex-col md:flex-row justify-between p-6'>
      <div className='w-1/2'>
        <img src={product.image} alt={product.title} className='block mx-auto' />
      </div>

      <div className='w-1/2'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <button onClick={addToCart} className='bg-blue-500 text-white px-4 py-2'>Add To Cart</button>
      </div>
    </div>
  )
}
