# Dasar-dasar JavaScript

Dalam modul ini, kita mengulas kembali konsep fundamental JavaScript, termasuk variabel, tipe data, dan fungsi.

---

### Variabel dan Tipe Data

Dalam JavaScript, Anda dapat mendeklarasikan variabel untuk menyimpan data. Ada beberapa tipe data dasar yang perlu Anda ketahui:

* **`String`**: Digunakan untuk menyimpan teks, ditandai dengan tanda kutip tunggal (`'...'`) atau ganda (`"..."`).
    * **Contoh:** `const name = 'Max';`
* **`Number`**: Digunakan untuk menyimpan angka, baik bilangan bulat maupun desimal.
    * **Contoh:** `const age = 29;`
* **`Boolean`**: Digunakan untuk nilai logika yang hanya bisa `true` (benar) atau `false` (salah).
    * **Contoh:** `const hasHobbies = true;`

---

### Fungsi

Fungsi adalah blok kode yang dapat digunakan kembali.

* **Deklarasi**: Anda membuat fungsi menggunakan kata kunci `function`.
    * **Contoh:** `function summarizeUser(userName, userAge, userHasHobby) { ... }`
* **Parameter & Argumen**: Fungsi menerima *input* melalui **parameter** (variabel yang ditentukan di deklarasi fungsi) dan menerima nilai nyata saat dipanggil yang disebut **argumen**.
* **Lingkup (*Scoping*)**: Variabel yang dideklarasikan di dalam fungsi (parameter) hanya bisa diakses di dalam fungsi tersebut. Variabel yang dideklarasikan di luar fungsi adalah **variabel global** yang dapat diakses dari mana saja.
* **Nilai Kembali (*Return Value*)**: Anda dapat mengembalikan nilai dari fungsi menggunakan pernyataan `return`.

---

### Demonstrasi

Selama demonstrasi, kita membuat file `play.js` dengan kode sederhana dan menjalankannya di terminal menggunakan perintah:

`node play.js`

Perintah ini akan mengeksekusi kode di dalam file dan menampilkan hasilnya ke konsol.