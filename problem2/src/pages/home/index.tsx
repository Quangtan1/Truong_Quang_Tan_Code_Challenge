import { useEffect, useState } from "react";
import Input from "#/src/components/Input";
import OverLay from "#/src/components/Overlay";
import CURRENCY_ICON from "#/src/constants/icons";
import Select from "#/src/components/Select";

const API_URL = "https://interview.switcheo.com/prices.json";

interface ICurrency {
  currency: string;
  date: string;
  price: number;
}

const HomePage: React.FC = () => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("SWTH");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await fetch(API_URL);

        const data: ICurrency[] = await response.json();

        setCurrencies(data);
        const fromRate = data.find(
          (item) => item.currency === fromCurrency
        )?.price;
        const toRate = data.find((item) => item.currency === toCurrency)?.price;

        if (fromRate && toRate) {
          return setExchangeRate(toRate / fromRate);
        }
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };
    getCurrencies();
  }, [fromCurrency, toCurrency]);

  const handleSwap = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert(
        `Swapped ${amount} ${fromCurrency} to ${(
          Number(amount) * (exchangeRate || 1)
        ).toFixed(2)} ${toCurrency}`
      );
      setLoading(false);
    }, 1500);
  };

  const onSwitchCurrency = () => {
    const newCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(newCurrency);
  };

  return (
    <main>
      <OverLay>
        <section className="w-screen flex justify-center items-center h-screen bg-[url('/src/assets/images/bg_currency.jpg')] bg-cover">
          <div className="max-w-4xl mx-auto flex flex-col bg-white p-8 z-10 shadow-xl rounded space-y-4">
            <div className="flex gap-4 flex-col items-center">
              <div className="flex space-x-4">
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
                <Select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencies.map((item) => (
                    <Select.Option key={item.currency} value={item.currency}>
                      {CURRENCY_ICON[item.currency]} {item.currency}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <button
                className="text-center w-fit text-gray-600 cursor-pointer"
                onClick={onSwitchCurrency}
              >
                ⇅
              </button>
              <div className="flex space-x-4">
                <Input
                  value={(Number(amount) * (exchangeRate || 1)).toFixed(2)}
                  disabled
                  placeholder="Converted amount"
                />
                <Select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencies.map((item) => (
                    <Select.Option key={item.currency} value={item.currency}>
                      {CURRENCY_ICON[item.currency]} {item.currency}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="text-center text-gray-500">
              Exchange Rate: 1 {fromCurrency} ={" "}
              {exchangeRate ? exchangeRate.toFixed(4) : "-"} {toCurrency}
            </div>
            <button
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
              onClick={handleSwap}
              disabled={loading}
            >
              {loading ? "Swapping..." : "Swap"}
            </button>
          </div>
        </section>
      </OverLay>
    </main>
  );
};

export default HomePage;
