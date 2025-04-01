// let text = "salom"

// for (let i = 0; i < 1000; i++){
//     console.log(text);
// }

// ==================

// console.log("a" > "b" ? "a katta" : "b katta");

// ===================

// function trickyScope() {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     if (true) {
//         var a = 40;
//         let b = 50;
//         const c = 60;
//         console.log(a, b, c);
//     }

//     console.log(a, b, c);
// }

// trickyScope();

// ===================

// let arr = `Burama Metal (serial), MEGAN, Tug’ilmagan, Sakkizoyoq o’yini, Morgdagi qotillik, Overlord, Yengilmas Boyka 1, Yengilmas Boyka 2, Yengilmas Boyka 3, Yengilmas Boyka 4, O’lim kuni muborak, O’lim kuni muborak 2, Hellboy, Chappi, G’aroyib odamlar: Rassamaxa, JOKER, La’nat 1, La’nat 2, La’nat 3, U | ОНО | IT, U | ОНО | IT 2, Uidji: Veronika la’nati, La’natlangan Anabel 1, La’natlangan Anabel 2, O’likxona, Uidji taxtasi: Ruxlar bilan aloqa, Vampir, Texasdagi qonli qirg’in, Epidemiya, Piraniyalar 1, Piraniyalar 2, Tarot: o’lim kartasi, Teskari Hisob, Avram Linkoln: Vampir ovchisi, Demetr: Shaytonning oxirgi sayoxati, Narkoman ayiq, Vinniy pux: Qon va Asal, Iblis qutisi, Iblis qutisi 2, O’lim daftari, Qush qutisi | O’lim iskanjasida, Qush qutisi 2 | O’lim iskanjasida 2, Uddaburon yigitlar 4, Dunyodan uzilgan, Oilaviy reja, Super dada, Jinoyatchilar shaxri 4, Lara Kroft: Daxma talonchisi, Uchinchisi ortiqcha 1, Uchinchisi ortiqcha 2, Hech qachon taslim bo’lma, Hech qachon taslim bo’lma 2, Hech qachon taslim bo’lma 3, Krid, Krid 2, Krid 3, Venom, Venom 2, Mening josus qizim, Mening josus qizim 2, Smoking, Harld va sehrli qalam, Elektr shtati, Jinoyatchi, Lyusi, Har narsaga qodir Bryus, Vaqt, Farsaj 2 : Tokyo Drift`,
//     txt2 = arr.split(", "),
//     result = [];

// for (let i = 0; i < txt2.length; i++){
//     result += `${i+1}. ${txt2[i]} \n`
// }

// console.log(result);

// ===================

// function whatday(num) {

//     switch (num) {
//         case 1:
//             return "Sunday"
//         case 2:
//             return "Monday"
//         case 3:
//             return "Tuesday"
//         case 4:
//             return "Wednesday"
//         case 5:
//             return "Thursday"
//         case 6:
//             return "Friday"
//         case 7:
//             return "Saturday"
//         default:
//             return "Wrong, please enter a number between 1 and 7"
//     }

// }

// console.log(whatday(2));
