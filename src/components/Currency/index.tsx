"use client";

import Currency from "@/lib/data";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

type Values = {
  code: string; 
  value: number; 
}

type CurrencyData = {
  code: string;
  value: Values;
};

export default function Cards() {
  const [currencyData, setCurrencyData] = useState<CurrencyData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMoreCards, setIsMoreCards] = useState<number>(4);

  useEffect(() => {
    async function getData() {
      try {
        const response = await Currency();
        const filteredCurrencies: CurrencyData[] = Object.entries(response.data)
          .filter(([code, _]) =>
            ["USD", "GBT", "BTC", "EUR", "JPY", "AUD", "CAD", "ARS", "CNY"].includes(code)
          )
          .map(([code, value]) => ({ code, value }));

        setCurrencyData(filteredCurrencies);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching currency data:", error);
        // Handle error state if needed
      }
    }

    getData();
  }, []);

  function handleMoreCard() {
    if (isMoreCards < currencyData.length) {
      setIsMoreCards((cards) => cards + 2);
    }
  }
 console.log(currencyData)
  return (
    <>
      {isLoading ? (
        <section aria-label="Cotação da Moeda" className="flex justify-center my-6">
          <div className="flex w-80% max-w-screen-2xl justify-center align-middle flex-wrap gap-3 m-4 ">
            {currencyData.length > 0 ? (
              currencyData.slice(0, isMoreCards).map((currency, index) => (
                <div
                  aria-label="cartão cotação"
                  key={index}
                  className="flex w-520 h-36 px-32 py-30 items-center justify-between rounded-lg border border-gray-700 bg-gray-900 box-border max-sm:w-96 max-sm:px-10 max-sm:py-10 "
                >
                  <div className="flex align-middle justify-center ">
                    {/* You can use the cloudinary URL directly here if needed */}
                    <img
                      className="w-12 h-12 box-border"
                      src={`https://res.cloudinary.com/djugggwq3/image/upload/v1695150583/${currency.code}.png`}
                      alt={currency.code}
                    />
                  </div>
                  <div aria-label="nome da moeda" className="w-279.287 h-24 flex justify-center align-middle flex-col">
                    <p
                      aria-label="nome da moeda"
                      className="text-gray-400 font-poppins text-base font-normal leading-49.371"
                    >
                      {currency.code}
                    </p>
                    <p
                      aria-label="valor da moeda em Real Brasileiro"
                      className="text-gray-400 font-poppins text-base font-light leading-10"
                    >
                      R${" "}
                      {parseFloat(currency.value.value.toFixed(2)).toString().replace(".", ",")}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1>Não tem dados ...</h1>
            )}
          </div>
        </section>
      ) : (
        <section aria-label="Carregando a seção" className="flex justify-center my-6">
          <div aria-label="Carregando de cards" className="flex w-80% max-w-screen-2xl justify-center flex-wrap gap-3 m-4">
            <Stack spacing={1}>
              {[...Array(4)].map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rounded"
                  height={144}
                  className="w-520 max-sm:w-96"
                  sx={{ bgcolor: "grey.900" }}
                />
              ))}
            </Stack>
          </div>
        </section>
      )}
      {isMoreCards < currencyData.length && (
        <button
          onClick={handleMoreCard}
          className="text-gray-400 bg-gray-900 p-3 rounded-lg hover:brightness-90 "
        >
          VER MAIS
        </button>
      )}
    </>
  );
}