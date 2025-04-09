'use strict';

// Masala 1
let Atham_height = 1.69;
let Atham_Weight = 78;

let Sardor_height = 1.95;
let Sardor_Weight = 92;

let Sardor_result = Sardor_Weight / (Sardor_height * Sardor_height);
// console.log(Sardor_result.toFixed(1));
let Atham_result = Atham_Weight / (Atham_height * Atham_height);
// console.log(Atham_result.toFixed(1));

const BMI = Sardor_result < Atham_result;

console.log(BMI);


console.log('------------------');


// Masala 2
let SardorWeight = 1.88;
let SardorHeight = 95;

let AthamWeight = 1.76;
let AthamHeight = 85;

let SardorBMI = SardorWeight / (SardorHeight * SardorHeight);
let AthamBMI = AthamWeight / (AthamHeight * AthamHeight);

const Bmi = SardorBMI > AthamBMI;

console.log(Bmi);