import { SaleRecord } from "../types/sales.js";
import { RoleRecord } from "../types/roles.js";
import { sanitizeString } from "../utils/sanitizeString.js";

export function getRoleProfit(
  sales: SaleRecord[],
  roles: RoleRecord[]
): { role: string; totalProfit: number }[] {
  const agentToRole = new Map(
    roles.map((r) => [sanitizeString(r.agent), r.role])
  );

  const profitMap = new Map<string, number>();
  for (const sale of sales) {
    const role = agentToRole.get(sanitizeString(sale.agent));
    if (!role) continue;
    profitMap.set(role, (profitMap.get(role) ?? 0) + sale.profit);
  }

  return Array.from(profitMap.entries())
    .map(([role, totalProfit]) => ({ role, totalProfit }))
    .sort((a, b) => b.totalProfit - a.totalProfit);
}
