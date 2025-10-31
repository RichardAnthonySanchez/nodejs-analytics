import path from "node:path";
import express, {
  type Application,
  type Request,
  type Response,
  type Router,
} from "express";

import { fileURLToPath } from "node:url";

const app: Application = express();
const port: number = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

import { loginRouter } from "./routes/loginRouter.js";
app.use("/login", loginRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
