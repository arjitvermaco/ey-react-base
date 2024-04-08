import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    
    <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-lg p-6 rounded-md mt-8'>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title}/>
        <h2>{product.title}</h2>
        <h4>${product.price}</h4>
      </Link>
    </div>
   

  )
}
