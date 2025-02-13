interface WalletRowProps {
  className?: string;
  amount: number;
  usdValue: number;
  formattedAmount: string;
}

const WalletRow: React.FC<WalletRowProps> = ({
  className,
  amount,
  usdValue,
  formattedAmount,
}) => {
  return (
    <div
      className={`flex justify-between items-center p-2 border-b ${className}`}
    >
      <span className="text-lg font-semibold">{formattedAmount}</span>
      <span className="text-lg font-semibold">{amount}</span>
      <span className="text-gray-500">${usdValue.toFixed(2)}</span>
    </div>
  );
};

export default WalletRow;
