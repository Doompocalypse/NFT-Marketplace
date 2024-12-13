export function validateVideoUrl(url: string): boolean {
  try {
    new URL(url);
    return url.endsWith('.mp4');
  } catch {
    return false;
  }
}

export function validateEthAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

export function validatePrice(price: number): boolean {
  return price > 0 && Number.isFinite(price);
}