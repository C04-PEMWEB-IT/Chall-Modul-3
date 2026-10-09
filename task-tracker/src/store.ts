import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { Task } from "./types.ts";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const dbPath = join(rootDir, "tasks.json");

export function loadTasks(): Task[] {
  if (!existsSync(dbPath)) return [];
  const raw = readFileSync(dbPath, "utf-8");
  if (raw.trim() === "") return [];
  return JSON.parse(raw) as Task[];
}

export function saveTasks(tasks: Task[]): void {
  writeFileSync(dbPath, JSON.stringify(tasks, null, 2) + "\n", "utf-8");
}
