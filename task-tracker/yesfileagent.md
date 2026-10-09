# Catatan File Instruksi Harness (yesfileagent)

Harness: `opencode v2.0.26`, dijalankan pada proyek `task-tracker/`.

## Pencarian file instruksi

Dicari di `/home/clouxy/Projects/Chall-Modul-3` dan `task-tracker/`:

- `task-tracker/AGENTS.md` — ADA, dibaca
- `CLAUDE.md` — tidak ada
- `GEMINI.md` — tidak ada
- `opencode.json / opencode.yaml` — tidak ada
- `.opencode/` — tidak ada

## File yang benar-benar dibaca saat menjelaskan struktur

Kegiatan dengan file instruksi membaca:

- `task-tracker/AGENTS.md` (instruksi: bahasa Indonesia, perintah run/check, konvensi ESM + strict, format jawaban Ringkasan/Tabel File/Cara Jalan)
- `task-tracker/package.json`
- `task-tracker/tsconfig.json`
- `task-tracker/src/types.ts`
- `task-tracker/src/store.ts`
- `task-tracker/src/tasks.ts`
- `task-tracker/src/index.ts`

## Kesimpulan

Ada file instruksi agen yang dibaca (`AGENTS.md`), dan jawaban harness mengikuti
aturannya (format Ringkasan, Tabel File, Cara Jalan).
Pasangan dari `nofileagent.md` (kondisi tanpa file).
