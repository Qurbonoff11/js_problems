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

// ===================

// function usdcny(usd) {

//     let CNY;
//     CNY = usd * 6.75
//     return `${CNY.toFixed(2)} Chinese Yuan`

// }

// console.log(usdcny(15));

// ===================

// function finalGrade(exam, projects) {
//     if (exam > 90 || projects > 10) {
//         return 100;
//     } else if (exam > 75 && projects >= 5) {
//         return 90;
//     } else if (exam > 50 && projects >= 2) {
//         return 75;
//     } else {
//         return 0;
//     }
// }

// console.log(finalGrade(100, 12))

// ===================

// function trickyScope() {
//     var x = 10;
//     if (true) {
//         let x = 5;
//         console.log(x);
//     }
//     console.log(x);
// }

// trickyScope();

// ===================

// var arr1=[1,2,3,4,5]
// arr1.reverse()
// console.log(arr1)
// var arr2=['a','b','c']
// arr2.reverse()
// console.log(arr2)

// ===================

// var a = 1;

// const func = () => {
//     console.log(a)
//     var a = 5
// }

// func()

// ===================

// let i = 0

// const arr = new Array(5)
// arr.forEach(() => i++)

// console.log(i);

// ===================

// const persons = [
//     {
//         username: "Akbar",
//         level: 32,
//         rank: "Gold 1"
//     },
//     {
//         username: "Qurbonoff",
//         level: 35,
//         rank: "Silver 4"
//     },
//     {
//         username: "Makhsad",
//         level: 22,
//         rank: "Silver 3"
//     },
//     {
//         username: "Hacker",
//         level: 102,
//         rank: "Diamond 5"
//     }
// ]

// for (let i = 0; i < persons.length; i++){
//     console.log(persons[i]);
// }

// ===================

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// ==================

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1();
// counter1();
// counter2();

// const result = counter1() + counter2();
// console.log(result);
