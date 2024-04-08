import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const {id} = useParams()
  const apiUrl = "https://fakestoreapi.com/products/"+id
  return (
    <div className='mt-12'>ProductPage for {id}</div>
  )
}
