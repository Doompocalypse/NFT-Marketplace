export const SALE_END_DATE = new Date('2025-01-01T00:00:00Z');

export function isDiscountActive(): boolean {
  return new Date() < SALE_END_DATE;
}

export function calculatePrice(originalPrice: number): {
  finalPrice: number;
  originalPrice: number;
  isDiscounted: boolean;
} {
  const isDiscounted = isDiscountActive();
  return {
    finalPrice: isDiscounted ? originalPrice * 0.5 : originalPrice,
    originalPrice,
    isDiscounted
  };
}