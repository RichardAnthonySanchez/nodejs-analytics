import { Router } from "express";
import { salesController } from "../controllers/salesController.js";
import { authenticateToken } from "../middleware/auth.js";

export const salesRouter = Router();

salesRouter.get("/", authenticateToken, salesController);
