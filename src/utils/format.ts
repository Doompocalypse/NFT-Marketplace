export function formatEth(amount: number): string {
  return `${amount} ETH`;
}

export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}