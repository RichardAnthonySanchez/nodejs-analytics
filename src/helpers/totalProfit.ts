import { SaleRecord } from "../types/sales.js";

export function getTotalProfit(sales: SaleRecord[]): number {
  return sales.reduce((acc, record) => acc + record.profit, 0);
}
