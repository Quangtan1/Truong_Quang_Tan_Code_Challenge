export enum Blockchain {
  Osmosis = "Osmosis",
  Ethereum = "Ethereum",
  Arbitrum = "Arbitrum",
  Zilliqa = "Zilliqa",
  Neo = "Neo",
}

export interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: Blockchain;
}
