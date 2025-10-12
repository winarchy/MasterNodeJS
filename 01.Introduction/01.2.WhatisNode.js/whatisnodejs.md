# Apa Itu Node.js?

Node.js adalah sebuah **runtime JavaScript** yang memungkinkan Anda menjalankan kode JavaScript di luar peramban (browser). Ini mengubah JavaScript dari bahasa yang hanya digunakan untuk interaksi di peramban (seperti memanipulasi DOM atau membuat *pop-up*) menjadi bahasa pemrograman serbaguna.

---

### Bagaimana Node.js Bekerja?

Node.js dibangun di atas **mesin V8**, yang dibuat oleh Google dan awalnya dirancang untuk menjalankan JavaScript di peramban Chrome. V8 mengambil kode JavaScript dan mengompilasinya menjadi kode mesin yang dapat dipahami dan dijalankan oleh komputer Anda.

---

### Perbedaan Utama: JavaScript di Browser vs. Node.js

Meskipun keduanya menggunakan JavaScript, ada perbedaan fungsionalitas yang signifikan:

* **JavaScript di Browser**
    * Fokus utama adalah berinteraksi dengan **DOM** (Document Object Model) untuk memanipulasi elemen HTML.
    * Memiliki batasan keamanan yang ketat, misalnya **tidak bisa mengakses sistem file lokal** (membaca, menulis, atau menghapus file) karena alasan keamanan.

* **Node.js**
    * **Tidak berinteraksi dengan DOM**, karena tidak ada halaman web yang dilampirkan.
    * Menambahkan fungsionalitas baru seperti kemampuan untuk **mengakses sistem file lokal**, yang sangat berguna untuk aplikasi server-side.
    * Memungkinkan JavaScript berfungsi layaknya bahasa pemrograman umum lainnya yang bisa dijalankan langsung di komputer Anda.

---

### Kesimpulan

Pada intinya, **Node.js memungkinkan JavaScript untuk digunakan sebagai bahasa pemrograman di server**, dengan fungsionalitas tambahan yang tidak tersedia di peramban. Ini menjadikannya pilihan yang sangat baik untuk membangun aplikasi web yang berjalan di server.