
export default async function Currency() {
  const fetchCurrencies = async () => {
    const response = await fetch(
      "https://brapi.dev/api/v2/currency/available?search=BRL",
      {
        next: {
          revalidate: 3000,
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

  try {
    const currencyList: any = await fetchCurrencies();
    const response = await fetch(
      `https://brapi.dev/api/v2/currency?currency=${currencyList}`,
      {
        next: {
          revalidate: 60000,
        },
      }
    );

    const data = await response.json(); 
    const { currency } = data;

    return  currency ;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
