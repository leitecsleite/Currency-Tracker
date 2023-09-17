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

export default async function Currency() {
  const fetchCurrencies = async () => {
    const response = await fetch(
      "https://brapi.dev/api/v2/currency/available?search=BRL",
      {
        next: {
          revalidate: 600,
        },
      }
    );
    const data = await response.json();
    const { currencies } = data;
    const currencyNames = currencies.map(
      (currency: { name: string }) => currency.name
    );
    return currencyNames.join("%2C");
  };

  const fetchCurrencyData = async () => {
    const currencyList: any = await fetchCurrencies();
    const response = await fetch(
      `https://brapi.dev/api/v2/currency?currency=${currencyList}`
    );
    const data = await response.json();
    const { currency } = data;
    return currency;
  };

  const currencyData: CurrencyData[] = await fetchCurrencyData();

  const metadeArray = currencyData.length / 2;

  console.log(metadeArray);

  return (
    <>
      <section className="flex justify-between w-full">
        <div className="flex justify-between flex-col">
          {currencyData ? (
            currencyData.slice(metadeArray).map((currency) => (
              <>
                <div
                  key={currency.name}
                  className="flex w-520 h-36 px-32 py-30 items-center gap-y-6 rounded-lg border border-gray-700 bg-gray-900"
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

        <div className="flex justify-between flex-col">
          {currencyData ? (
            currencyData.slice(0, metadeArray).map((currency) => (
              <>
                <div
                  key={currency.name}
                  className="flex w-520 h-36 px-32 py-30 items-center gap-y-6 rounded-lg border border-gray-700 bg-gray-900"
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
    </>
  );
}
