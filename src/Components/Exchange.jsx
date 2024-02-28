import React, { useState, useEffect } from "react";
import ExchangeCArd from "./ExchangeCArd";
import Loaders from "./Loaders";
import ErrorComponent from "./ErrorComponent";

function Exchange() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const[error ,Seterror] = useState()

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/exchanges`
        );
        const data = await response.json();
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false)
        Seterror(true)
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  if(error){
    return
    <ErrorComponent message={"Error"}/>}
  



  return (
    <div>
      {loading ? (
        <Loaders />
      ) : (
        <div className='flex flex-wrap justify-center'>
          {exchanges.map((details) => (
            <ExchangeCArd
              key={details.id}
              name={details.name}
              image={details.image}
              rank={details.trust_score_rank}
              url={details.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exchange;
