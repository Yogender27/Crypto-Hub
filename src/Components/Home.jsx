import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl md:text-6xl text-white font-bold mb-8">Welcome to Crypto World!</h1>
    <p className="text-lg md:text-xl text-white text-center max-w-md mb-8">Explore the latest trends in cryptocurrency and stay updated with real-time market data.</p>
    <div className="flex space-x-4">
     <Link to= "/exchange"> <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">Exchanges</button></Link>
      <Link to= "/coin"><button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">Coins</button></Link>
    </div>
  </div>
  );
}

export default Home;
