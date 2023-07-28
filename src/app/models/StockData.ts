export interface StockData {
  t: number[]; // Unix timestamps for each data point
  o: number[]; // Open prices for each data point
  h: number[]; // High prices for each data point
  l: number[]; // Low prices for each data point
  c: number[]; // Close prices for each data point
}
