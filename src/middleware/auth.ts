import { Router, Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    user?: string | jwt.JwtPayload;
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.query.token as string | undefined;

  if (!token) {
    return res.status(401).send("No token provided");
  }

  jwt.verify(token, process.env.JWT_SECRET || "secret_key", (err, user) => {
    if (err) {
      return res.status(403).send("Invalid or expired token");
    }

    req.user = user;
    next();
  });
};
