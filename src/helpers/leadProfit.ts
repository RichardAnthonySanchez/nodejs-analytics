import { SaleRecord } from "../types/sales";
import { LeadProfit } from "../types/leads";

export function getLeadProfitLeaderboard(
  sales: SaleRecord[],
  limit?: number
): LeadProfit[] {
  const profitsByLead = sales.reduce<Record<string, number>>((acc, sale) => {
    acc[sale.lead] = (acc[sale.lead] || 0) + sale.profit;
    return acc;
  }, {});

  const leaderboard = Object.entries(profitsByLead)
    .map(([lead, totalProfit]) => ({ lead, totalProfit }))
    .sort((a, b) => b.totalProfit - a.totalProfit);

  return limit ? leaderboard.slice(0, limit) : leaderboard;
}
