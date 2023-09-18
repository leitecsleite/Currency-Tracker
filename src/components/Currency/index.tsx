
import Currency from "@/lib/data";
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

export default async function Cards({}) {
  const currencyData: CurrencyData[] = await Currency();

  if (!currencyData) {
    return null;
  }

  return (
    <>
      <section className="flex justify-between w-full flex-wrap">
        <div className="flex justify-between flex-col">
          {currencyData.length > 0 ? (
            currencyData.map((currency, index) => (
              <>
                <div
                  key={index}
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
