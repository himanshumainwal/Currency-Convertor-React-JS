import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          //   `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        let data = await response.json();
        // console.log(data);
        setInfo(data[currency]);
      } catch (error) {
        console.error("Error fetching currency data:");
      }
    };

    fetchData();
    // console.log(`Fetching data for currency: ${currency}`);
  }, [currency]);

  return info;
}

export default useCurrencyInfo;
