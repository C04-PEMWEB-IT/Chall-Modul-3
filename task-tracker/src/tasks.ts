import type { Task } from "./types.ts";

export function nextId(tasks: Task[]): number {
  let max = 0;
  for (const t of tasks) {
    if (t.id > max) max = t.id;
  }
  return max + 1;
}

export function addTask(tasks: Task[], title: string): Task {
  const task: Task = {
    id: nextId(tasks),
    title,
    status: "todo",
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

export function completeTask(tasks: Task[], id: number): boolean {
  const found = tasks.find((t) => t.id === id);
  if (!found) return false;
  found.status = "done";
  return true;
}

export function removeTask(tasks: Task[], id: number): boolean {
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  tasks.splice(idx, 1);
  return true;
}
