'use srtict';

// * ============ Masala 1 ============

// For tsikli yordamida foydalanuvchidan kiritilgan matnni teskari tartibda chiqarish.
// Input: "hello"
// Output: "olleh"

let input = "hello";
let reverse = "";

for (let char of input) {
  reverse = char + reverse;
}

console.log(reverse);

// * ============ Masala 2 ============

// For tsiklidan foydalanib stringdagi barcha "a" harflarini olib tashlash.
// Input: "banana"
// Output: "bnn"=

// * ============ Masala 3 ============

// For tsikli yordamida stringdagi faqat raqamlarni ajratib olish.
// Input: "123abc"
// Output: "123"=

// * ============ Masala 4 ============

// For tsikli yordamida raqamlarni yig'indisini chiqarish.
// Input: "123abc"
// Output: 6=

// * ============ Masala 5 ============

// For tskli yordamida, matndagi birinchi so'zning bosh harfini katta qilish.
// Input: "hello world"
// Output: "Hello world"

// * ============ Masala 6 ============

// For tsikli foydalanib stringdagi bo'sh joyni hisoblash.
// Input: "hello world"
// Output: 1

// * ============ Masala 7 ============

// Foydalanuvchidan kiritilgan matn palindrom ekanligini "for" tsikli yordamida tekshirish.
// Input: "madam"
// Output: True
// Input: "hello"
// Output: False

// * =========== Masala 8 ============

// For tsiklidan foydalanib, stringdagi so'zlarni ajratib olish (bo'sh joylar bilan ajratilgan).
// Input: "hello world"
// Output: ["hello", "world"]

// * ========== Masala 9 ============

// For tsikli yordamida matndagi eng uzun so'zni topish.
// Input: "hello Uzbekistan"
// Output: "Uzbekistan"

// * ========== Masala 10 ============

// For tsiklidan foydalanib, stringdagi so'zlar sonini aniqlash.
// Input: "hello world"
// Output: 2


// ! ========== Masala 11 ============

// For tsikli foydalanib, stringdagi har bir belgi necha marta takrorlalgan harfni aniqlash.
// Input: "potato"
// Output: {p: 1, o: 2, t: 2, a: 1}

// * ========== Masala 12 ============

// For tsikli yordamida, stringdagi har bir harfni qayta o'zgartirish (masalan: h -> j).
// Input: "hello"
// Output: "jello"

// * ========== Masala 13 ============

// For tsiklidan foydalanib, strdagi so'zlarni raqamlar bilan ajratib yozish (masalan: "1. hello 2. world").
// Input: "hello world"
// Output: "1. hello 2. world"

// * ========== Masala 14 ============

// For tsikli yordamida strdagi raqamlar bina harflarni alohida ajratish.
// Input: "abc123dfe"
// Output: Letters: "abcdf" Numbers: "123"

// * ========== Masala 15 ============

// For tsikli yordamida, strni ko'paytirish.
// Input: "abc"
// Output: "abc abc abc"