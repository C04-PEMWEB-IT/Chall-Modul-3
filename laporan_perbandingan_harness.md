# Laporan Perbandingan AI Agent Harness (OpenCode vs Gemini CLI)

Berikut adalah hasil evaluasi dan perbandingan kinerja antara **OpenCode** dan **Gemini CLI** dalam menangani penambahan fitur `priority` serta perbaikan error TypeScript (`tsc`) secara otomatis pada proyek `task-tracker`.

## Tabel Perbandingan

| Parameter Evaluasi | OpenCode | Gemini CLI |
| :--- | :--- | :--- |
| **Kualitas Rencana** | Cepat dan *to-the-point*; langsung mengidentifikasi file terpengaruh (`src/tasks.ts`) tanpa membuat langkah berlebihan. | Memberikan tahapan rencana yang jelas sebelum mengeksekusi editan pada file. |
| **Jumlah Error `tsc`** | Mengatasi seluruh error kompilasi hingga tanpa error. | - |
| **Banyaknya Intervensi Manual** | **0 Intervensi** (Otomatis membaca, mengedit file, dan memverifikasi perintah `npx tsc`). | Banyak intervensi sehingga menghabiskan tokennya. |
| **Kenyamanan Alur Kerja** | Sangat efisien dan eksekusi lokal terasa lebih cepat di dalam terminal VS Code. | Perlu terus diperhatikan karena perlu meminta izin untuk menjalankan program sendiri. |


## Kesimpulan

Berdasarkan pengujian penambahan fitur `priority` pada proyek `task-tracker`, baik `OpenCode` maupun `Gemini CLI` terbukti sangat andal dalam peran sebagai AI agent mandiri yang mampu menyelesaikan seluruh error tipe TypeScript, meskipun Gemini CLI membutuhkan waktu yang lebih lama hingga tokennya habis dan tidak menghasilkan output.