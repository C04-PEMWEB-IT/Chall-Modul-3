# Hasil Banding: Tanpa vs Dengan AGENTS.md

Permintaan yang sama: `jelasin struktur proyek task-tracker`.

## Tanpa AGENTS.md (lihat `nofileagent.md`)

Kondisi: tidak ada file instruksi, jawaban disusun bebas dari baca source langsung.

Hasil saat itu (ringkas): bullet list per file —
`package.json` (module + scripts), `tsconfig.json` (strict), `src/types.ts`
(`TaskStatus`, `Task`), `src/store.ts` (`loadTasks`, `saveTasks`),
`src/tasks.ts` (logika murni), `src/index.ts` (CLI `main()`),
plus alur `index -> store -> tasks` dan `tasks.json` di-ignore.
Tanpa heading baku, tanpa tabel, perintah run/check hanya disebut sekilas.

## Dengan AGENTS.md (lihat `yesfileagent.md`)

Kondisi: `task-tracker/AGENTS.md` ada dan dibaca. Jawaban wajib ikut formatnya.

### Ringkasan

`task-tracker/` adalah CLI task tracker TypeScript ESM dengan `strict: true`.

### Tabel File

| File | Peran |
|---|---|
| `package.json` | `type: module`, script `start` dan `check` |
| `tsconfig.json` | `strict`, `nodenext`, `allowImportingTsExtensions` |
| `src/types.ts` | `TaskStatus`, `interface Task` |
| `src/store.ts` | I/O `loadTasks()` / `saveTasks()` ke `tasks.json` |
| `src/tasks.ts` | Logika murni `nextId/addTask/completeTask/removeTask` |
| `src/index.ts` | CLI `main()` (`add/list/done/delete`) |
| `AGENTS.md` | Instruksi harness |

### Cara Jalan

- Run: `node --experimental-strip-types src/index.ts <add\|list\|done\|delete>`
- Check: `npx tsc --noEmit` (harus EXIT 0)

## Perbandingan

| Aspek | Tanpa AGENTS.md | Dengan AGENTS.md |
|---|---|---|
| Format | Bullet bebas | Baku: Ringkasan, Tabel File, Cara Jalan |
| Bahasa | Indonesia (kebetulan) | Indonesia (diwajibkan) |
| Perintah run/check | Disebut sekilas | Bagian khusus, lengkap |
| Konvensi (ESM, strict, `.ts`, tasks.json) | Tidak disebut | Disebut eksplisit |
| Konsistensi | Tergantung model | Terstandar oleh file |

## Kesimpulan

File `AGENTS.md` mengubah jawaban yang sama dari bebas menjadi terstandar:
isi fakta tetap sama (sumber kode tidak berubah), tapi struktur, kelengkapan
perintah, dan konvensi menjadi konsisten.
