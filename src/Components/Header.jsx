import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className='flex flex-wrap bg-black sticky top-0 z-50'>
      <button className=' bg-black text-yellow-400 rounded-lg m-2'>
        <Link to='/'>Home</Link>
        </button>
        <button className=' bg-black text-yellow-400 rounded-lg m-2'>
        <Link to='/exchange'>Exchange</Link>
        </button>
        <button className=' bg-black text-yellow-400 rounded-lg m-2'>
        <Link to='/coin'>Coins</Link>
        </button>
        </header>
        
        
      
      
      
    </div>
  )
}

export default Header
