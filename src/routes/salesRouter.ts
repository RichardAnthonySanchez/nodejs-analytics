import { Router, Request, Response } from "express";
import { salesController } from "../controllers/salesController.js";

export const salesRouter = Router();

salesRouter.get("/", salesController);
