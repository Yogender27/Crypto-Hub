import React from 'react';
import { Link } from 'react-router-dom';

function CoinCard({ id, name, image, price, symbol, currencySymbol }) {
  return (
    <Link className=' md:w-1/5 w-1/2 p-4' to={`/coin/${id}`}>
      <div className="coin-card border rounded-lg md:p-4 md:m-4 hover:scale-105 transition-transform p-2 m-2">
        <img src={image} alt={name} className=" md:w-28 mx-auto mb-4 " />
        <div className="text-center text-sm">
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500">{symbol}</p>
          <p className="mt-2 font-semibold">
            Price: {currencySymbol}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CoinCard;

