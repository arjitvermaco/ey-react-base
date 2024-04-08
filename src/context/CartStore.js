import React, { useEffect, useState } from 'react'
import CartContext from './CartContext'

export default function CartStore({children}) {
  const [userCart,setUserCart] = useState([]);
  let myAppName = "My new Store"
  const testFunction = ()=>{
    console.log("This is a test function")
  }

  useEffect(()=>{
    console.log(userCart)
  },[userCart])

  return (
    <CartContext.Provider value={{userCart,setUserCart,testFunction,myAppName}}>
            {children}
    </CartContext.Provider>
  )
}
