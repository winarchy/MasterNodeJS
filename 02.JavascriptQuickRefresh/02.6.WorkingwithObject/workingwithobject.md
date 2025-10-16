Objek Dasar dan Metode di JavaScript
Objek adalah struktur data fundamental di JavaScript yang memungkinkan kita untuk mengelompokkan data (properti) dan fungsi (metode) terkait menjadi satu kesatuan.

1. Membuat dan Mengakses Properti Objek
Objek dibuat menggunakan kurung kurawal ({}) dan berisi pasangan kunci-nilai (key-value pairs) yang dipisahkan oleh koma. Kunci dipisahkan dari nilainya dengan titik dua (:).

JavaScript

// Deklarasi Objek 'person'
const person = {
  // Properti: pasangan kunci-nilai
  name: 'Max', // Kunci: name, Nilai: 'Max'
  age: 29      // Kunci: age, Nilai: 29
};

// Mencetak seluruh objek
console.log(person); // Output: { name: 'Max', age: 29 }

// Mengakses properti menggunakan Notasi Titik
console.log(person.name); // Output: Max
2. Mendefinisikan Metode (Fungsi dalam Objek)
Objek tidak hanya dapat menyimpan data (variabel), tetapi juga fungsi, yang disebut metode.

❌ Masalah dengan this pada Fungsi Panah (=>)
Ketika menggunakan fungsi panah sebagai metode di dalam objek, kata kunci this tidak mengacu pada objek itu sendiri, melainkan mengacu pada lingkup global (atau konteks di luarnya, seperti window di browser atau global runtime Node.js). Ini menyebabkan properti seperti this.name menjadi undefined.

JavaScript

const person = {
  name: 'Max',
  // Fungsi Panah: 'this' mengacu ke global scope (node global/window)
  greet: () => {
    console.log('Hei, saya ' + this.name);
  }
};

person.greet(); // Output: Hei, saya undefined 
✅ Solusi: Menggunakan Fungsi Tradisional atau Sintaks Metode Singkat
Untuk memastikan bahwa this mengacu pada objek di sekitarnya (person dalam kasus ini), Anda harus menggunakan:

A. Fungsi Tradisional (Old-School Function)
JavaScript

const person = {
  name: 'Max',
  // Fungsi Tradisional: 'this' mengacu pada objek 'person'
  greet: function() {
    console.log('Hei, saya ' + this.name);
  }
};
person.greet(); // Output: Hei, saya Max
B. Sintaks Metode Singkat (Short-hand Method Syntax) - Disarankan
Ini adalah sintaks modern dan yang akan digunakan dalam kursus. Anda menghilangkan titik dua dan kata kunci function setelah kunci.

JavaScript

const person = {
  name: 'Max',
  // Sintaks Metode Singkat: 'this' mengacu pada objek 'person'
  greet() { // Kunci, diikuti tanda kurung, diikuti badan fungsi
    console.log('Hei, saya ' + this.name); 
  }
};
person.greet(); // Output: Hei, saya Max
3. Notasi Titik untuk Pemanggilan Metode
Untuk memanggil metode, Anda menggunakan Notasi Titik (.) diikuti dengan nama metode dan tanda kurung pemanggilan fungsi ().

JavaScript

// Memanggil metode 'greet' pada objek 'person'
person.greet(); 
Poin Penting: Notasi titik (person.greet) mengacu pada objek yang disimpan dalam konstanta, memungkinkan Anda mengakses properti atau memanggil metode di dalamnya.