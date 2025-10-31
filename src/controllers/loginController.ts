import type { Request, Response, NextFunction } from "express";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.render("loginView", {
      title: "Login",
    });
  } catch (err) {
    next(err);
  }
};
