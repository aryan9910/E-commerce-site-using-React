import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display:'flex', gap:'1rem', padding:'1rem', backgroundColor:'#f5f5f5', borderBottom:'1px solid #ccc'}}>
        <Link to= '/'>Home</Link>
        <Link to= '/products'>Products</Link>
        <Link to= '/cart'>Cart</Link>
    </nav>
  )
}

export default Navbar
