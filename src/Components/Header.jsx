import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from 'react-icons/md';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-900 py-4 shadow-md">
      <div className="flex justify-between items-center px-4">
        <h1 className="md:text-2xl font-bold bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">CryptoHub</h1>
        <nav>
          <MdOutlineMenu
            className="text-white md:hidden cursor-pointer absolute right-0 mx-4"
            onClick={toggleMenu}
          />
          <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'flex flex-col w-full py-4 text-right gap-4 text-2xl' : 'hidden'}`}>
            <li>
              <Link
                to="/"
                className="text-lg text-blue-200 md:text-xl  hover:text-blue-600 transition duration-300 ease-in-out border rounded-lg  border-none py-2 md:px-4  md:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/exchange"
                className="text-lg md:text-xl text-blue-200 hover:text-blue-600 transition duration-300 ease-in-out border rounded-lg  border-none py-2 md:px-4  md:bg-transparent"
              >
                Exchanges
              </Link>
            </li>
            <li>
              <Link
                to="/coin"
                className="text-lg md:text-xl text-blue-200  hover:text-blue-600 transition duration-300 ease-in-out border rounded-lg  border-none py-2 md:px-4 md:bg-transparent
                "
              >
                Coin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
