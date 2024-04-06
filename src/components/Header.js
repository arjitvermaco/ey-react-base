import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <Link to='/'>Home Page</Link>
        <Link to='/about'>About Page</Link>
        <Link to='/cart'>Cart Page</Link>
    </div>
  )
}
