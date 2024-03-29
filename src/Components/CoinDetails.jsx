import React, { useState, useEffect } from "react";
import ErrorComponent from "./ErrorComponent";
import { useParams } from "react-router-dom";
import Loaders from "./Loaders";
import Chart from "./Chart";

function CoinDetails() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const [chartArray, setChartArray] = useState([]);
  const [days, setDays] = useState("7d");
  const btnArr = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];
  const statsChange = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    setLoading(false);
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );

        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        const data = await response.json();
        const chartData = await res.json();
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error("Error fetching data:", error);
      }
    };

    fetchCoin();
  }, [params.id, currency, days]);

  if (error) {
    return <ErrorComponent message={"Error in fetching details"} />;
  }

  return (
    <div className="">
      {loading ? (
        <Loaders />
      ) : (
        <div className="mx-8 my-8">
          <div className="md:mx-20 md:my-5">
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </div>
          <div className="flex md:justify-center md:items-center md:w-full overflow-y-hidden ">
            {/*BUtton*/}
            {btnArr.map((i) => (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white md:text-lg text-sm md:font-bold  md:px-4 md:py-4 rounded focus:outline-none focus:shadow-outline m-2 py-1 px-2 md:w-[64px]"
                key={i}
                onClick={() => statsChange(i)}
              >
                {i}
              </button>
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <div className="flex justify-center mt-4">
              <label className="mr-4">
                <input
                  type="radio"
                  value="inr"
                  checked={currency === "inr"}
                  onChange={handleCurrencyChange}
                  className="mr-2"
                />
                <span className="text-gray-800">INR</span>
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="usd"
                  checked={currency === "usd"}
                  onChange={handleCurrencyChange}
                  className="mr-2"
                />
                <span className="text-gray-800">USD</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="eur"
                  checked={currency === "eur"}
                  onChange={handleCurrencyChange}
                  className="mr-2"
                />
                <span className="text-gray-800">EUR</span>
              </label>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <img
              className="w-16 h-16 mr-2"
              src={coin.image.large}
              alt={`Logo of ${coin.name}`}
            />
            <div>
              <h2 className="text-xl font-semibold">{coin.name}</h2>
              <h2 className="text-gray-500 text-sm">
                Last update on: {coin.market_data.last_updated}
              </h2>
            </div>
          </div>
          <h1 className="mt-4 text-3xl font-bold">
            {currencySymbol}
            {coin.market_data.current_price[currency]}
          </h1>
          <h2 className="mt-2 inline-block text-gray-600">
            {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            {coin.market_data.price_change_percentage_24h > 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline ml-1 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            ) : coin.market_data.price_change_percentage_24h < 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline ml-1 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline ml-1 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            )}
          </h2>

          <h2 className="inline-block bg-slate-900 text-white text-xs font-bold py-1 px-2 rounded-md">
            {coin.market_cap_rank}
          </h2>

          <div className="justify-between w-full my-4 font-bold ">
            <h2>
              {" "}
              Max Supply:{" "}
              <span className="text-red-600">
                {coin.market_data.max_supply}
              </span>
            </h2>
            <h2>
              Circulating Supply:{" "}
              <span className="text-green-600">
                {coin.market_data.circulating_supply}
              </span>
            </h2>
            <h2>
              All Time Low:{" "}
              <span className="text-red-600">
                {" "}
                {`${currencySymbol}${coin.market_data.atl[currency]}`}
              </span>
            </h2>
            <h2>
              All Time High:{" "}
              <span className="text-green-600">
                {" "}
                {`${currencySymbol}${coin.market_data.ath[currency]}`}
              </span>
            </h2>
            <h2>
              Market Cap:{" "}
              <span className="text-gray-500">
                {" "}
                {`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              </span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinDetails;
