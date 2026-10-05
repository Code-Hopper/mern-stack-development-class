import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to="/">home </Link>
            <Link to="/about"> about</Link>
        </ul>
    </div>
  )
}

export default Navbar
