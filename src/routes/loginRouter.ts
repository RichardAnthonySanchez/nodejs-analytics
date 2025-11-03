import { Router } from "express";
import jwt from "jsonwebtoken";
import { loginController } from "../controllers/loginController.js";

const { sign } = jwt;

export const loginRouter = Router();

loginRouter.get("/", loginController);

const ADMIN_USERNAME = "safeship";
const ADMIN_PASSWORD = "imhiringtony";

loginRouter.post("/", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = sign({ username }, "secret_key", {
      expiresIn: "1h",
    });
    res.redirect(`/sales?token=${token}`);
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});
