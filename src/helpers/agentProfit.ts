import { SaleRecord } from "../types/sales";
import { normalizeString } from "../utils/normalizeString.js";
import { AgentPerformance } from "../types/agents";

export const getAgentPerformance = (
  sales: SaleRecord[]
): AgentPerformance[] => {
  const result: AgentPerformance[] = [];

  for (const sale of sales) {
    const cleaned = normalizeString(sale.agent);
    const cleanedNoSpace = cleaned.replace(/\s+/g, "");

    let existing = result.find(
      (r) => r.agent.replace(/\s+/g, "") === cleanedNoSpace
    );

    if (existing) {
      if (cleaned.includes(" ") && !existing.agent.includes(" ")) {
        existing.agent = cleaned;
      }
      existing.profit += sale.profit;
      existing.count += 1;
    } else {
      result.push({ agent: cleaned, profit: sale.profit, count: 1 });
    }
  }

  return result;
};
