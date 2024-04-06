import React, { useEffect, useState } from 'react'

export default function ApiCall() {
let apiUrl = "https://fakestoreapi.com/products";
 const [products,setProducts] = useState([])


async function getProducts(){
    console.log("Calling api")
    const response = await fetch(apiUrl);
    console.log(response)
    const data = await response.json()
    console.log("Data from api",data)
    setProducts(data)
}

useEffect(()=>{
    getProducts()
},[])

  return (
    <div>
        {products.length>0?products.map((item)=>{
            return(
                <>
                
                <h3>{item.title}</h3>
                <img src={item.image} className='w-32'/>
                </>
            )
        } ):  "Loading..."}
    </div>
  )
}
