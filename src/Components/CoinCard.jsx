import React from 'react';
import { Link } from 'react-router-dom';

function CoinCard({ id, name, image, price, symbol, currencySymbol }) {
  return (
    <Link to={`/coin/${id}`}>
      <div className="coin-card border rounded-lg p-4 m-4 hover:scale-105 transition-transform">
        <img src={image} alt={name} className="w-42 h-40 mx-auto mb-4" />
        <div className="text-center">
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500">{symbol}</p>
          <p className="mt-2">
            Price: {currencySymbol}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CoinCard;

