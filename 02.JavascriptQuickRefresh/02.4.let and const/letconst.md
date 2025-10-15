# `let` vs. `const`: Deklarasi Variabel Modern

Dalam pengembangan JavaScript modern, **`let`** dan **`const`** adalah cara yang disarankan untuk mendeklarasikan variabel. Keduanya menawarkan peningkatan signifikan dibandingkan metode lama, **`var`**.

---

### Perbedaan Utama

* **`var`**: Metode lama. Meskipun masih berfungsi, ia memiliki beberapa kelemahan yang telah diperbaiki oleh `let` dan `const`.
* **`let`**: Digunakan untuk variabel yang nilainya akan **diubah** atau **ditetapkan ulang**.
* **`const`**: Digunakan untuk **konstanta**. Setelah diberi nilai, nilainya **tidak dapat diubah**.

---

### Mengapa Menggunakan `let` dan `const`?

Menggunakan `let` dan `const` membuat kode Anda lebih jelas dan aman. Dengan menggunakan **`const`**, Anda menunjukkan bahwa nilai variabel tersebut tidak seharusnya berubah. Ini juga berfungsi sebagai pengaman; jika Anda secara tidak sengaja mencoba mengubah nilai konstanta, JavaScript akan memberikan **kesalahan**, yang membantu Anda mencegah *bug*.

### Aturan Praktis

Sebagai aturan umum, Anda harus **selalu menggunakan `const`** sebisa mungkin. Jika Anda yakin nilai variabel tidak akan berubah, gunakan `const`. Gunakan **`let`** hanya jika Anda memang berencana untuk mengubah nilainya nanti.