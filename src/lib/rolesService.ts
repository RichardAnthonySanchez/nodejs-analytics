import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { RoleRecord } from "../types/roles";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rolesPath = path.join(__dirname, "../../data/dummy_roles.json");

export async function getRolesData(): Promise<RoleRecord[]> {
  const json = await fs.readFile(rolesPath, "utf-8");
  return JSON.parse(json) as RoleRecord[];
}
