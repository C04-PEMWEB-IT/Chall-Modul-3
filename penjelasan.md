# Penjelasan Proyek — Chall-Modul-3

Dokumen ini merangkum apa saja yang sudah dikerjakan, dan fungsi masing-masing
file. Ditujukan untuk orang dan harness berikutnya agar langsung paham tanpa
harus bertanya ulang.

## Ringkasan kegiatan

1. **Task 1 — Audit kode TS manual (`audit-ts/`)**: live coding tanpa harness/AI.
   Menulis kode pendek pakai `any`/`as`, menunjukkan bahayanya saat runtime,
   lalu memperbaikinya dengan Union type + Type guard sampai
   `npx tsc --noEmit` bersih.
2. **Task 2 — Harness + `task-tracker/`**: memakai harness `opencode v2.0.26`.
   Membuat proyek CLI task tracker baru, memintanya menjelaskan struktur,
   lalu mencatat file instruksi yang dibaca ke `nofileagent.md`
   (hasil: tidak ada file instruksi saat itu).
3. **Task 3 — Konteks `AGENTS.md`**: membuat `task-tracker/AGENTS.md`,
   mengulang permintaan yang sama, mencatat ke `yesfileagent.md`,
   dan menaruh perbandingan tanpa vs dengan file di `hasilbanding.md`.

## Tabel File

| File | Peran |
|---|---|
| `README.md` (root) | Judul repo, belum diisi detail |
| `penjelasan.md` (file ini) | Rangkuman kegiatan + fungsi file untuk penerus |
| `audit-ts/package.json` | Setup `typescript` + `@types/node` untuk audit |
| `audit-ts/tsconfig.json` | `strict: true` untuk audit |
| `audit-ts/src/audit.ts` | Kode audit versi fixed (Union + `typeof` guard) |
| `task-tracker/package.json` | Identitas proyek, script `start` (run) dan `check` (`tsc --noEmit`) |
| `task-tracker/tsconfig.json` | `strict`, `nodenext`, `allowImportingTsExtensions` |
| `task-tracker/src/types.ts` | Tipe `TaskStatus`, `interface Task` |
| `task-tracker/src/store.ts` | I/O `loadTasks()` / `saveTasks()` ke `tasks.json` |
| `task-tracker/src/tasks.ts` | Logika murni `nextId/addTask/completeTask/removeTask` |
| `task-tracker/src/index.ts` | CLI `main()` (`add/list/done/delete`) |
| `task-tracker/AGENTS.md` | Instruksi harness: perintah, konvensi, format jawaban |
| `task-tracker/nofileagent.md` | Catatan: tidak ada file instruksi saat penjelasan pertama |
| `task-tracker/yesfileagent.md` | Catatan: `AGENTS.md` ada dan dibaca |
| `task-tracker/hasilbanding.md` | Perbandingan jawaban tanpa vs dengan `AGENTS.md` |
| `task-tracker/.gitignore` | Mengabaikan `node_modules/`, `tasks.json`, `dist/` |
| `task-tracker/README.md` | Judul proyek, belum diisi detail |

## Cara Jalan

- Audit: `cd audit-ts && npx tsc --noEmit`, run via
  `node --experimental-strip-types src/audit.ts`
- Tracker: `cd task-tracker && npm install && npm run check`,
  run via `node --experimental-strip-types src/index.ts <add|list|done|delete>`
