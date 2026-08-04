import { promises as fs } from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "data", "blog");

export async function getJsonFilesAsArray() {
  try {
    const files = await fs.readdir(BLOG_DIR);

    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    return await Promise.all(
      jsonFiles.map(async (file) => {
        const raw = await fs.readFile(
          path.join(BLOG_DIR, file),
          "utf8"
        );

        return JSON.parse(raw);
      })
    );
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}