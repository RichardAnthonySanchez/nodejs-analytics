import { Router } from "express";
import { authenticateToken } from "../middleware/auth.js";
import { getSalesData } from "../lib/salesService.js";
import { getRolesData } from "../lib/rolesService.js";
import { getTotalProfit } from "../helpers/totalProfit.js";
import { getRoleProfit } from "../helpers/roleProfit.js";
import { getAgentPerformance } from "../helpers/agentProfit.js";
import { getLeadProfitLeaderboard } from "../helpers/leadProfit.js";

export const salesRouter = Router();

salesRouter.get("/", authenticateToken, async (req, res, next) => {
  try {
    const [sales, roles] = await Promise.all([getSalesData(), getRolesData()]);

    const totalProfit = getTotalProfit(sales);
    const roleProfits = getRoleProfit(sales, roles);
    const agentPerformance = getAgentPerformance(sales);
    const leadProfit = getLeadProfitLeaderboard(sales);

    res.render("salesView", {
      totalProfit,
      roleProfits,
      agentPerformance,
      leadProfit,
    });
  } catch (err) {
    next(err);
  }
});
