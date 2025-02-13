import { Blockchain, WalletBalance } from "../interfaces";

export const useWalletBalances = (): WalletBalance[] => {
  return [
    { currency: "ETH", amount: 1.5, blockchain: Blockchain.Ethereum },
    { currency: "OSMO", amount: 200, blockchain: Blockchain.Osmosis },
  ];
};
