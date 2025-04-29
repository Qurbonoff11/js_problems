"use srtict";

// * ============ Masala 1 ============

// For tsikli yordamida foydalanuvchidan kiritilgan matnni teskari tartibda chiqarish.
// Input: "hello"
// Output: "olleh"

// const reverseText = (text) => {
//   let result = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }
//   console.log(result);
// };

// reverseText("salom");

// * ============ Masala 2 ============

// For tsiklidan foydalanib stringdagi barcha "a" harflarini olib tashlash.
// Input: "banana"
// Output: "bnn"

const deleteLaters = (text, letter) => {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== letter) {
      result += text[i]
    }
  }
  console.log(result);
};

deleteLaters("banana", "n");

// * ============ Masala 3 ============

// For tsikli yordamida stringdagi faqat raqamlarni ajratib olish.
// Input: "123abc"
// Output: "123"

// const ofNubers = (text) => {
//   let result = ""

//   for (let i = 0; i < text.length; i++) {
//     if (!isNaN(text[i])) {
//       result += text[i]
//     }
//   }
//   console.log(result)
// }

// ofNubers("123abc456def")

// * ============ Masala 4 ============

// For tsikli yordamida raqamlarni yig'indisini chiqarish.
// Input: "123abc"
// Output: 6

// const inNumbers = (text) => {
//   let result = 0

//   for (let i = 0; i < text.length; i++) {
//     if (!isNaN(text[i])) {
//       result += Number(text[i])
//     }
//   }
//   console.log(result)
// }

// inNumbers("123abcd")

// * ============ Masala 5 ============

// For tskli yordamida, matndagi birinchi so'zning bosh harfini katta qilish.
// Input: "hello world"
// Output: "Hello world"

// const capitalize = (text) => {
//   let result = ""

//   for (let i = 0; i < text.length; i++) {
//     if (i == 0) {
//       result += text[i].toUpperCase()
//     }
//   }
//   result += text.slice(1)
//   console.log(result);
// }

// capitalize("salom")

// * ============ Masala 6 ============

// For tsikli foydalanib stringdagi bo'sh joyni hisoblash.
// Input: "hello world"
// Output: 1

// const spaceCalc = (text, space) => {
//   let result = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === space) {
//       result++
//     }
//   }
//   console.log(result);
// }

// spaceCalc("hello world, what's up guys", " ")

// * ============ Masala 7 ============

// Foydalanuvchidan kiritilgan matn palindrom ekanligini "for" tsikli yordamida tekshirish.
// Input: "madam"
// Output: True
// Input: "hello"
// Output: False

// const palindrom = (text) => {
//   let result = "";
//   let i = text.length-1;

//   do {
//     result += text[i];
//     i--;
//   } while (i >= 0);

//   console.log(result === text ? "True" : "False");
// };

// palindrom("aziza")

// * =========== Masala 8 ============

// For tsiklidan foydalanib, stringdagi so'zlarni ajratib olish (bo'sh joylar bilan ajratilgan).
// Input: "hello world"
// Output: ["hello", "world"]

// const separatingWords = (text) => {
//   let text2 = text.split(" ")
//   let result = []

//   for (let i = 0; i < text2.length; i++) {
//     result = result.concat(text2[i])
//   }
//   return result
// }

// console.log(separatingWords("hello world"));

// * ========== Masala 9 ============

// For tsikli yordamida matndagi eng uzun so'zni topish.
// Input: "hello Uzbekistan"
// Output: "Uzbekistan"

// const longLetter = (text) => {
//   let text2 = text.split(" ")
//   let result = ""

//   for (let i = 0; i < text2.length; i++) {
//     if (text2[i].length > result.length) {
//       result = text2[i]
//     }
//   }
//   return result
// };

// console.log(longLetter("hello uzbekistan"));

// * ========== Masala 10 ============

// For tsiklidan foydalanib, stringdagi so'zlar sonini aniqlash.
// Input: "hello world"
// Output: 2

// const letters = (text) => {

//   let text2 = text.split(" ")
//   let result = 0

//   for (let i = 0; i < text2.length; i++) {
//     result++
//   }

//   return result
// }

// console.log(letters("salom dunyo"));

// ! ========== Masala 11 ============

// For tsikli foydalanib, stringdagi har bir belgi necha marta takrorlalgan harfni aniqlash.
// Input: "potato"
// Output: {p: 1, o: 2, t: 2, a: 1}

// * ========== Masala 12 ============

// For tsikli yordamida, stringdagi har bir harfni qayta o'zgartirish (masalan: h -> j).
// Input: "hello"
// Output: "jello"

// let txt = "hello",
//     txt2 = txt.split(""),
//     result = ""

// for (let i = 0; i < txt2.length; i++){
//     if (txt2[i] === "h"){
//         result += "j"
//     }else{
//         result += txt2[i]
//     }
// }

// console.log(result);

// const replaceLetter = (text, letter) => {
//   let result = ""

//   for (let i = 0; i < text.length; i++) {
//     text[0] = letter
//     result += text[i]
//   }
//   return result
// }

// console.log(replaceLetter("salom", "m"));

// * ========== Masala 13 ============

// For tsiklidan foydalanib, strdagi so'zlarni raqamlar bilan ajratib yozish (masalan: "1. hello 2. world").
// Input: "hello world"
// Output: "1. hello 2. world"

// let txt = "hello world",
//     txt2 = txt.split(" "),
//     result = ""

// for (let i = 0; i < txt2.length; i++){
//     result += `${i+1}. ${txt2[i]} `
// }

// console.log(result);

// * ========== Masala 14 ============

// For tsikli yordamida strdagi raqamlar bina harflarni alohida ajratish.
// Input: "abc123dfe"
// Output: Letters: "abcdf" Numbers: "123"

// let txt = "abc123dfe",
//     newTxt = txt.split(""),
//     letters = "",
//     numbers = ""

// for (let i = 0; i < txt.length; i++){

//     if ("a" <= newTxt[i] && newTxt[i] <= "z"){
//         letters += newTxt[i]
//     } else {
//         numbers += newTxt[i]
//     }
// }

// console.log(`Letters: ${letters}\nNumbers: ${numbers}`)

// * ========== Masala 15 ============

// For tsikli yordamida, strni ko'paytirish.
// Input: "abc"
// Output: "abc abc abc"

// let txt = "abc",
//     num = 3,
//     result = ""

// for (let i = 0; i < num; i++){
//     result += txt + " "
// }

// console.log(result);
