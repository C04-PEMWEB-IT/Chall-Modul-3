# AGENTS.md — task-tracker

Proyek: CLI task tracker TypeScript sederhana (ESM, `strict: true`).

## Perintah

- Jalan: `node --experimental-strip-types src/index.ts <add|list|done|delete>`
- Cek tipe: `npx tsc --noEmit` (harus EXIT 0)
- Install: `npm install`

## Konvensi

- Bahasa jawaban: Indonesia.
- Jangan pakai `any` / `as` kecuali untuk `JSON.parse` yang sudah dibatasi tipe `Task[]`.
- Import antar file sumber pakai ekstensi `.ts` (didukung `allowImportingTsExtensions`).
- Logika murni di `src/tasks.ts`, I/O file hanya di `src/store.ts`, CLI hanya di `src/index.ts`.
- Penyimpanan runtime: `tasks.json` di root `task-tracker/` (di-ignore git).

## Aturan menjelaskan struktur

Saat diminta menjelaskan struktur proyek, selalu pakai format:
1. `Ringkasan` — 1 kalimat.
2. `Tabel File` — tabel kolom File | Peran.
3. `Cara Jalan` — perintah run + check.
