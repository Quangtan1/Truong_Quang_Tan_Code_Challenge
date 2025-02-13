import { ReactNode, useMemo } from "react";
import { Blockchain, WalletBalance } from "../../interfaces";
import { usePrices, useWalletBalances } from "../../hooks";
import WalletRow from "../../components/WalletRow";

interface BoxProps {
  key: string;
}

interface Props extends BoxProps {
  children: ReactNode;
}

export const WalletPage = (props: Props) => {
  const { children, ...rest } = props;
  //add WalletBalance
  const balances: WalletBalance[] = useWalletBalances();
  const prices = usePrices();

  //add enum for blockchain instead of any
  const getPriority = (blockchain: Blockchain): number => {
    //object key instead of switch case
    const priorities: Record<Blockchain, number> = {
      Osmosis: 100,
      Ethereum: 50,
      Arbitrum: 30,
      Zilliqa: 20,
      Neo: 20,
    };
    return priorities[blockchain] ?? -99;
  };

  const sortedBalances = useMemo(() => {
    //Fixed filtering condition lhsPriority-> balancePriority
    return balances
      .filter(
        (balance) =>
          getPriority(balance.blockchain) > -99 && balance.amount <= 0
      )
      .sort(
        (lhs, rhs) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain)
      );
    // Optimized sorting logic
  }, [balances]);

  //removed unnecessary prices

  return (
    <div {...rest}>
      {children}
      {sortedBalances.map((balance) => (
        //Used key (balance.currency) instead of index.
        <WalletRow
          key={balance.currency}
          className={""}
          amount={balance.amount}
          usdValue={prices[balance.currency] * balance.amount}
          formattedAmount={balance.amount.toFixed()}
        />
      ))}
    </div>
  );
};
