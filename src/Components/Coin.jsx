import React, { useState, useEffect } from 'react';
import Loaders from './Loaders';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

function Coin() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [pages, setPages] = useState(1);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const btn = Array(132).fill(1);

  const changePage = (page) => {
    setPages(page);
    setLoading(true);
  };

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${pages}`
        );
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error("Error fetching data:", error);
      }
    };

    fetchCoin();
  }, [currency, pages]);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    setLoading(true); // Reset loading when currency changes
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  if (error) {
    return <ErrorComponent />;
  }

  // Filter coins based on search query
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Button */}
      <form className="max-w-md mx-auto my-1" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your crypto coin" onChange={handleSearch} />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

      {/* Radio buttons for currency selection */}
      <div className="flex justify-center mt-4">
        <label className="mr-4">
          <input type="radio" value="inr" checked={currency === "inr"} onChange={handleCurrencyChange} />
          INR
        </label>
        <label className="mr-4">
          <input type="radio" value="usd" checked={currency === "usd"} onChange={handleCurrencyChange} />
          USD
        </label>
        <label>
          <input type="radio" value="eur" checked={currency === "eur"} onChange={handleCurrencyChange} />
          EUR
        </label>
      </div>

      {loading ? (
        <Loaders />
      ) : (

        
        <div className="flex flex-wrap justify-center">
          {filteredCoins.map((details) => (
            <CoinCard
              key={details.id}
              id={details.id}
              name={details.name}
              image={details.image}
              price={details.current_price}
              symbol={details.symbol}
              currencySymbol={currencySymbol}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <div className="overflow-x-auto max-w-full">
          <div className="flex">
            {btn.map((item, index) => (
              <button
                key={index}
                className="border bg-black text-white px-3 py-1 mx-1"
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
