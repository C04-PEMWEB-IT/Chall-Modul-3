import { loadTasks, saveTasks } from "./store.ts";
import { addTask, completeTask, removeTask } from "./tasks.ts";

function usage(): void {
  console.log("Usage:");
  console.log("  npm start -- add <title>");
  console.log("  npm start -- list");
  console.log("  npm start -- done <id>");
  console.log("  npm start -- delete <id>");
}

function main(): void {
  const args = process.argv.slice(2);
  const cmd = args[0];

  if (cmd === "add") {
    const title = args.slice(1).join(" ").trim();
    if (title === "") {
      console.error("Title tidak boleh kosong.");
      process.exit(1);
    }
    const tasks = loadTasks();
    const created = addTask(tasks, title);
    saveTasks(tasks);
    console.log(`Added #${created.id}: ${created.title}`);
    return;
  }

  if (cmd === "list") {
    const tasks = loadTasks();
    if (tasks.length === 0) {
      console.log("Belum ada task.");
      return;
    }
    for (const t of tasks) {
      const mark = t.status === "done" ? "[x]" : "[ ]";
      console.log(`${mark} #${t.id} ${t.title}`);
    }
    return;
  }

  if (cmd === "done") {
    const id = Number(args[1]);
    if (!Number.isInteger(id)) {
      console.error("ID harus angka.");
      process.exit(1);
    }
    const tasks = loadTasks();
    if (!completeTask(tasks, id)) {
      console.error(`Task #${id} tidak ditemukan.`);
      process.exit(1);
    }
    saveTasks(tasks);
    console.log(`Done #${id}`);
    return;
  }

  if (cmd === "delete") {
    const id = Number(args[1]);
    if (!Number.isInteger(id)) {
      console.error("ID harus angka.");
      process.exit(1);
    }
    const tasks = loadTasks();
    if (!removeTask(tasks, id)) {
      console.error(`Task #${id} tidak ditemukan.`);
      process.exit(1);
    }
    saveTasks(tasks);
    console.log(`Deleted #${id}`);
    return;
  }

  usage();
}

main();
