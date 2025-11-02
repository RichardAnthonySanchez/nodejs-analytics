import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { SaleRecord } from "../types/sales";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../../data/dummy_data.json");

export async function getSalesData(): Promise<SaleRecord[]> {
  const json = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(json) as SaleRecord[];
}
