"use client";

import Currency from "@/lib/data";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

type CurrencyData = {
  fromCurrency: string;
  toCurrency: string;
  name: string;
  high: string;
  low: string;
  bidVariation: string;
  askPrice: string;
  bidPrice: string;
  updatedAtDate: string;
};

export default function Cards() {
  const [currencyData, setCurrencyData] = useState<CurrencyData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMoreCards, setIsMoreCards] = useState<number>(3);

  useEffect(() => {
    async function getData() {
      const response = await Currency();

      setCurrencyData(response);
      setIsLoading(true);
    }
    getData();
  }, []);

  function handleMoreCard() {
    if (isMoreCards < currencyData.length) {
      setIsMoreCards((cards) => cards + 3);
    }
  }

  return (
    <>
      {isLoading ? (
        <section className="flex justify-between w-full flex-wrap">
          <div className="flex justify-between flex-wrap">
            {currencyData.length > 0 ? (
              currencyData.slice(0, isMoreCards).map((currency, index) => (
                <>
                  <div
                    key={index}
                    className="flex w-1/3 h-36 px-32 py-30 items-center gap-y-6 rounded-lg border border-gray-700 bg-gray-900 box-border"
                  >
                    <div className="w-279.287 h-24  flex justify-center align-middle flex-col">
                      <p className="text-gray-400 font-poppins text-base font-normal leading-49.371">
                        {currency.name.split("/")[0].trim()}
                      </p>
                      <p className="text-gray-400 font-poppins text-base font-light leading-10">
                        R${" "}
                        {parseFloat(currency.askPrice)
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")}
                      </p>
                    </div>
                  </div>
                  <br></br>
                </>
              ))
            ) : (
              <h1>Não tem dados ...</h1>
            )}
          </div>
        </section>
      ) : (
        <section className="flex justify-between w-full flex-wrap">
          <div className="flex justify-between flex-wrap">
            <Stack spacing={1}>
              <Skeleton
                variant="rounded"
                width={366}
                height={144}
                sx={{ bgcolor: "grey.900" }}
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rounded"
                width={366}
                height={144}
                sx={{ bgcolor: "grey.900" }}
              />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rounded"
                width={366}
                height={144}
                sx={{ bgcolor: "grey.900" }}
              />
            </Stack>
          </div>
        </section>
      )}
      {isMoreCards < currencyData.length && (
        <button onClick={handleMoreCard} className="text-gray-400">
          VER MAIS
        </button>
      )}
    </>
  );
}
