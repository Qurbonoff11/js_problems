'use srtict';

// * ============ Masala 1 ============

// For tsikli yordamida foydalanuvchidan kiritilgan matnni teskari tartibda chiqarish.
// Input: "hello"
// Output: "olleh"

// let txt = "salom",
//     result = ""

// for (let i = txt.length-1; i >= 0; i--) {
//     result += txt[i]
// }

// console.log(result);

// * ============ Masala 2 ============

// For tsiklidan foydalanib stringdagi barcha "a" harflarini olib tashlash.
// Input: "banana"
// Output: "bnn"

// let txt = "banana",
//     result = ""

// for (let i = 0; i < txt.length; i++) {
//     if (txt[i] !== "a"){
//         result += txt[i]
//     }
// }
// console.log(result);

// * ============ Masala 3 ============

// For tsikli yordamida stringdagi faqat raqamlarni ajratib olish.
// Input: "123abc"
// Output: "123"

let txt = "123abc",
    txt2 = txt.split(""),
    result = ""

for (let i = 0; i < txt2.length; i++) {
    if (txt2[i] >= 0 && txt2[i] <= 9){
        result += txt2[i]
    }
}
console.log(result);

// * ============ Masala 4 ============

// For tsikli yordamida raqamlarni yig'indisini chiqarish.
// Input: "123abc"
// Output: 6

// let txt = "123abc",
//     txt2 = txt.split(""),
//     result = 0

// for (let i = 0; i < txt2.length; i++){
//     if (txt2[i] >= 0 && txt2[i] <= 9){
//         result += +txt2[i]
//     }
// }

// console.log(result);

// * ============ Masala 5 ============

// For tskli yordamida, matndagi birinchi so'zning bosh harfini katta qilish.
// Input: "hello world"
// Output: "Hello world"

// let txt = "hello world",
//     result = ""

// for (let i = 0; i < txt.length; i++){
//     // console.log(txt[i]);

//     if (i === 0){
//         result += txt[i].toUpperCase()
//     }

// }

// result += txt.slice(1)

// console.log(result);

// * ============ Masala 6 ============

// For tsikli foydalanib stringdagi bo'sh joyni hisoblash.
// Input: "hello world"
// Output: 1

// let txt = " hello world ",
//     result = 0

// for (let i = 0; i < txt.length; i++){
//     if (txt[i] === " "){
//         result++
//     }
// }

// console.log(result);

// * ============ Masala 7 ============

// Foydalanuvchidan kiritilgan matn palindrom ekanligini "for" tsikli yordamida tekshirish.
// Input: "madam"
// Output: True
// Input: "hello"
// Output: False

// let txt = "madam",
//     txt2 = txt.split(""),
//     result = ""

// for (let i = txt2.length-1; i >= 0; i--){
//     result += txt2[i]
// }

// console.log(result === txt ? "True" : "False");

// * =========== Masala 8 ============

// For tsiklidan foydalanib, stringdagi so'zlarni ajratib olish (bo'sh joylar bilan ajratilgan).
// Input: "hello world"
// Output: ["hello", "world"]

// let txt = "hello world",
//     txt2 = txt.split(" "),
//     result = []

// for (let i = 0; i < txt2.length; i++){
//     // console.log(txt2[i]);
//     result = result.concat(txt2[i])
// }

// console.log(result);

// * ========== Masala 9 ============

// For tsikli yordamida matndagi eng uzun so'zni topish.
// Input: "hello Uzbekistan"
// Output: "Uzbekistan"

// let txt = "hello Uzbekistan",
//     txt2 = txt.split(" "),
//     result = ""

// for (let i = 0; i < txt2.length; i++){
//     if (txt2[i].length > result.length){
//         result = txt2[i]
//     }
// }

// console.log(result);

// * ========== Masala 10 ============

// For tsiklidan foydalanib, stringdagi so'zlar sonini aniqlash.
// Input: "hello world"
// Output: 2

// let txt = "hello world",
//     txt2 = txt.split(" "),
//     result = 0

// for (let i = 0; i < txt2.length; i++){
//     result++
// }

// console.log(result);


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