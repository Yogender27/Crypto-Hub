import React from 'react';

function ExchangeCard({ name, image, rank, url }) {
  return (
    <div className="md:w-1/6 border border-gray-200 rounded-md shadow-lg md:p-4 flex flex-col justify-center items-center mx-2 my-2 w-[140px]">
      <a className="text-center" href={url}>
        <img className="md:w-24 md:h-24 w-16 h-16 mb-4 mx-auto my-auto" src={image} alt={name} />
        <p className="text-lg font-semibold mb-2">{name}</p>
        <p className="text-sm text-gray-600">Rank: {rank}</p>
      </a>
    </div>
  );
}

export default ExchangeCard;
