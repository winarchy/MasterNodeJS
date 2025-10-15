Fungsi Panah (Arrow Functions)
Fungsi panah adalah fitur modern di JavaScript yang menyediakan sintaks yang lebih ringkas dan perbedaan perilaku dengan kata kunci this. Sepanjang kursus ini, kita akan menggunakan sintaks ini secara eksklusif, jadi penting untuk memahaminya.

Sintaks Dasar
Fungsi panah dideklarasikan dengan menghilangkan kata kunci function dan menambahkan simbol panah (=>) di antara daftar parameter dan badan fungsi.

Contoh:

JavaScript

const ringkasPengguna = (namaPengguna, umurPengguna) => {
  // kode di sini
};
Ringkasan Sintaks Tambahan
Fungsi panah menawarkan beberapa sintaks yang lebih pendek untuk kasus-kasus tertentu:

Satu Baris Return: Jika fungsi hanya memiliki satu pernyataan return, Anda bisa menghilangkan tanda kurung kurawal ({}) dan kata kunci return itu sendiri.

Contoh: const tambah = (a, b) => a + b;

Satu Argumen: Jika fungsi hanya memiliki satu argumen, Anda bisa menghilangkan tanda kurung di sekeliling nama argumen.

Contoh: const tambahSatu = angka => angka + 1;

Tanpa Argumen: Jika fungsi tidak memiliki argumen, Anda harus menggunakan tanda kurung kosong () sebelum panah.

Contoh: const acak = () => { ... };

Perbedaan Perilaku this
Selain sintaks yang lebih ringkas, fungsi panah memiliki perilaku yang berbeda terkait dengan kata kunci this. Pembicara menyarankan untuk mencari sumber daya eksternal untuk pemahaman lebih dalam tentang topik ini.