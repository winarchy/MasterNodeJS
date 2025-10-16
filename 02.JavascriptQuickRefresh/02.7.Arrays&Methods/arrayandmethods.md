# 📝 Struktur Data Penting: Array di JavaScript

**Array** adalah struktur data fundamental di JavaScript, yang didefinisikan dengan tanda kurung siku (`[]`), dan digunakan untuk menyimpan daftar nilai yang berurutan.

---

## 1. Karakteristik Dasar Array

- **Definisi:** Array dibuat menggunakan `[]`.
- **Tipe Data Campuran (Heterogen):** Array dapat menyimpan berbagai tipe data secara bersamaan, menjadikannya sangat fleksibel.
  - **Contoh:** String, Number, Boolean, bahkan Objek, dan Array lain.
  - `['sport', 'cooking', 10, true, { name: 'Max' }]`

---

## 2. Mengakses Elemen Array (Iterasi)

Cara yang efisien untuk memproses setiap elemen dalam array adalah menggunakan perulangan (**loop**). Metode yang disarankan untuk array adalah **`for...of` loop**.

```javascript
const hobbies = ['Sports', 'Cooking'];

// Menggunakan 'for...of' untuk mengiterasi setiap elemen
for (const hobby of hobbies) {
  console.log(hobby);
}
/*
Output:
Sports
Cooking
*/

3. Metode Array Bawaan: map()
JavaScript menyediakan banyak metode bawaan (map, filter, reduce, dll.) yang mempermudah manipulasi data array. Fokus utama diberikan pada metode map().

Detail Metode map()
Fungsi: Digunakan untuk mengubah (mentransformasi) setiap elemen dalam array berdasarkan logika yang diberikan.

Output: map() selalu mengembalikan Array Baru. Ini menjamin bahwa array asli tidak dimodifikasi (disebut immutable).

Sintaks: map() menerima sebuah fungsi callback (seringkali fungsi panah) sebagai argumen, yang dijalankan pada setiap elemen. Fungsi callback harus mengembalikan versi elemen yang telah dimodifikasi.

Contoh Penggunaan map()
JavaScript

const originalHobbies = ['Sports', 'Cooking'];

// Menggunakan map() untuk membuat array baru dengan string yang diubah
const updatedHobbies = originalHobbies.map(hobby => {
  // Versi ringkas dari fungsi panah (menghilangkan 'return' dan '{}' jika hanya satu baris)
  return 'Hobby: ' + hobby;
});

console.log(updatedHobbies);   // Output: [ 'Hobby: Sports', 'Hobby: Cooking' ] (Array Baru)
console.log(originalHobbies); // Output: [ 'Sports', 'Cooking' ] (Array Lama TIDAK berubah)
Kesimpulan
Array adalah struktur data penting untuk mengelola daftar data. Metode array bawaan seperti map() akan sering digunakan dalam pengembangan JavaScript untuk manipulasi data yang efisien. Disarankan untuk selalu merujuk pada dokumentasi (seperti MDN) untuk memahami fungsi dari setiap metode array yang digunakan.
```
