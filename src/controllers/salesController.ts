import type { Request, Response, NextFunction } from "express";
import { getSalesData } from "../lib/salesService.js";

export const salesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getSalesData();
    res.render("salesView", { data });
  } catch (err) {
    console.error("Error loading sales data:", err);
    res.status(500).send("Server error");
  }
};
