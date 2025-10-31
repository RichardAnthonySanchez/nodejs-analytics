import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../../data/dummy_data.json");

export interface SaleRecord {
  _id: string;
  agent: string;
  timestamp: string;
  profit: number;
  jobNumber: number;
  status: "paid" | "unpaid";
  lead: string;
}

export async function getSalesData(): Promise<SaleRecord[]> {
  const json = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(json) as SaleRecord[];
}
