import React from 'react'

export default function ProductCard({product,addToCart}) {
  return (
    <div className='bg-white w-48 p-4 rounded-md flex flex-col items-center mt-12'>
        <img src={product.image} alt={product.title} className='w-32'/>
        <h2 className='mt-4'>{product.title}</h2>
        <button onClick={()=>{addToCart(product)}} className='mt-4 bg-teal-400 p-2 rounded-md'>Add to Cart</button>
    </div>
  )
}
