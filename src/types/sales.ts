export interface SaleRecord {
  _id: string;
  agent: string;
  timestamp: string;
  profit: number;
  jobNumber: number;
  status: "paid" | "unpaid";
  lead: string;
}
