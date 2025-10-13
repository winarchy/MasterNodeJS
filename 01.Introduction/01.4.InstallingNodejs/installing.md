# Memulai dengan Node.js

Untuk memulai pengembangan Node.js, Anda perlu mengikuti beberapa langkah penting, mulai dari instalasi hingga menulis dan menjalankan program pertama Anda.

---

### 1. Instalasi Node.js

* **Unduh dan Instal:** Kunjungi [nodejs.org](https://nodejs.org/) dan unduh versi terbaru. Proses instalasi sama di **Windows** dan **macOS**. Cukup jalankan *installer* dan biarkan semua pengaturan default.
* **Verifikasi:** Setelah instalasi, buka terminal (atau *Command Prompt*) dan ketik `node -v` untuk memastikan Node.js sudah terpasang dengan benar.

---

### 2. Mode Interaktif (REPL)

Node.js menawarkan mode interaktif yang disebut REPL (*Read-Eval-Print Loop*). Ini berguna untuk bereksperimen dengan kode JavaScript secara cepat.

* **Cara Mengakses:** Ketik `node` di terminal dan tekan **Enter**.
* **Fungsi:** Anda bisa menggunakannya sebagai kalkulator sederhana atau untuk menjalankan baris kode JavaScript satu per satu.
* **Keluar:** Tekan `Ctrl + C` dua kali, atau ketik `exit`.

---

### 3. Menyiapkan Lingkungan Pengembangan

Meskipun Anda bisa menggunakan editor apa pun, **Visual Studio Code (VS Code)** sangat disarankan karena fiturnya yang kaya dan gratis.

* **Editor Kode:** Unduh dan instal [Visual Studio Code](https://code.visualstudio.com/).
* **Pengaturan Opsional:**
    * Ubah tema warna menjadi **Dark+ theme**.
    * Pasang ekstensi **Material Icon Theme** untuk tampilan ikon file yang lebih baik.

---

### 4. Menjalankan Kode JavaScript Pertama

Setelah lingkungan disiapkan, Anda bisa mulai menulis kode.

* **Buat File:** Buat file baru dengan ekstensi `.js` (misalnya, `first-app.js`).
* **Tulis Kode:** Tambahkan kode JavaScript sederhana, seperti `console.log('Hello from Node.js!');`.
* **Jalankan:** Buka terminal di VS Code (melalui **Terminal > New Terminal**) dan jalankan file Anda dengan perintah: `node first-app.js`.

---

### 5. Menulis ke Sistem File

Salah satu fitur utama Node.js adalah kemampuannya berinteraksi dengan sistem file, sesuatu yang tidak bisa dilakukan di browser.

* **Impor Modul:** Gunakan fungsi `require()` untuk mengimpor modul inti `fs` (file system).
* **Tulis File:** Gunakan metode seperti `fs.writeFileSync()` untuk menulis konten ke file di hard drive Anda.
* **Contoh Kode:**

    ```javascript
    const fs = require('fs');

    fs.writeFileSync('hello.txt', 'Hello from Node.js!');
    ```
* **Eksekusi:** Jalankan lagi file tersebut dengan `node first-app.js`, dan file teks baru akan dibuat.