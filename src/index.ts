const path: typeof import("node:path") = require("node:path");
const express: typeof import("express") = require("express");

import type { Application } from "express";
import type { Request, Response, NextFunction } from "express";

const app: Application = express();

const port: number = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "public")));

/*
Router Pattern
import type { Router } from "express";
const foodsRouter: Router = require("./routes/v1/foodsRouter");
*/

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
