import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
<header className="bg-gradient-to-r from-gray-800 to-gray-900 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">CryptoHub</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-lg md:text-xl text-white hover:text-blue-600 transition duration-300 ease-in-out">Home</Link></li>
            <li><Link to="/exchange" className="text-lg md:text-xl text-white hover:text-blue-600 transition duration-300 ease-in-out">Exchanges</Link></li>
            <li><Link to="/coin" className="text-lg md:text-xl text-white hover:text-blue-600 transition duration-300 ease-in-out">Coin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
