import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411964.jpg?w=996&t=st=1708608144~exp=1708608744~hmac=5a2f3f2d5920220dd0067ecfa6fbf53d96a2eede8a47c555cba72b1233df2828")`, minHeight: 'calc(100vh - 9rem)' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Welcome to Our Crypto Platform</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Coins</h2>
            <p className="text-gray-200 mb-4">
              Explore our extensive list of cryptocurrencies. From popular coins like Bitcoin and Ethereum to upcoming projects, we've got it all covered.
            </p>
            <Link to='/coin' className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-600">Explore Coins</Link>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Exchanges</h2>
            <p className="text-gray-200 mb-4">
              Discover leading cryptocurrency exchanges for trading and investing. Compare features, fees, and supported assets to find the right platform for you.
            </p>
            <Link to='/exchange' className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-600">Explore Exchanges</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
