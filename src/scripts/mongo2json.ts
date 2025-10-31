import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) throw new Error("MONGO_URI environment variable not set.");

const client = new MongoClient(uri);
const OUTPUT_DIR = path.resolve("./data");

async function exportCollection(dbName: string, collectionName: string) {
  const db = client.db(dbName);

  const collections = await db.listCollections().toArray();
  const collectionNames = collections.map((c) => c.name);

  if (!collectionNames.includes(collectionName)) {
    console.warn(
      `Collection "${collectionName}" not found in database "${dbName}". Skipping.`
    );
    return;
  }

  const data = await db.collection(collectionName).find().toArray();
  const outputPath = path.join(OUTPUT_DIR, `${collectionName}.json`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

  console.log(
    `Exported ${data.length} documents from "${collectionName}" to "${outputPath}"`
  );
}

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB.");

    const DB_NAME = "hiring_test";
    await exportCollection(DB_NAME, "dummy_data");
    await exportCollection(DB_NAME, "dummy_roles");

    console.log("Export complete!");
  } catch (err) {
    console.error("Error exporting data:", err);
  } finally {
    await client.close();
  }
}

main();
