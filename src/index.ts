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

app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../src/public")));

import { loginRouter } from "./routes/loginRouter.js";
app.use("/login", loginRouter);

import { salesRouter } from "./routes/salesRouter.js";
app.use("/sales", salesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
