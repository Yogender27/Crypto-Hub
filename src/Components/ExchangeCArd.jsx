import React from 'react';

function ExchangeCard({ name, image, rank, url }) {
  return (
    <div className="w-64 h-64 border border-gray-200 rounded-md shadow-lg p-4 flex flex-col justify-center items-center">
      <a className="text-center" href={url}>
        <img className="w-24 h-24 mb-4 mx-auto" src={image} alt={name} />
        <p className="text-lg font-semibold mb-2">{name}</p>
        <p className="text-sm text-gray-600">Rank: {rank}</p>
      </a>
    </div>
  );
}

export default ExchangeCard;
