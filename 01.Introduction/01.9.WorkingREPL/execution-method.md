# Dua Cara Mengeksekusi Kode Node.js

Ada dua metode utama untuk menjalankan kode Node.js, masing-masing dengan kegunaan dan kelebihannya sendiri:

---

### 1. REPL (Read-Eval-Print-Loop)

REPL adalah lingkungan interaktif yang memungkinkan Anda menjalankan kode JavaScript baris demi baris secara instan.

* **Cara Mengakses**: Buka terminal atau *Command Prompt* dan ketik `node`.
* **Fungsi**: REPL sangat cocok sebagai "taman bermain" untuk menguji perintah sederhana atau bereksperimen dengan fitur Node.js.
* **Keterbatasan**: Kode yang Anda tulis di REPL tidak akan tersimpan. Setelah Anda keluar dari sesi, kode akan hilang.

---

### 2. Mengeksekusi File

Metode ini melibatkan penulisan seluruh kode Anda dalam sebuah file (`.js`) dan menjalankannya secara keseluruhan.

* **Cara Mengakses**: Gunakan perintah `node <nama-file.js>` di terminal.
* **Fungsi**: Ini adalah metode standar untuk membangun aplikasi nyata karena kode disimpan dalam file, membuatnya dapat diedit, dibagikan, dan di-*deploy*.
* **Keunggulan**: Memungkinkan Anda mengorganisir dan menyimpan kode untuk proyek yang lebih besar dan kompleks.

Dalam kursus ini, kita akan berfokus pada metode kedua (mengeksekusi file) karena inilah cara yang digunakan untuk membangun aplikasi Node.js yang sesungguhnya.