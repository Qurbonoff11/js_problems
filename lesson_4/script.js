'use strict';

// Masala 1

let price = 165,
    result;

switch (true){
    case price < 50:
        result = price + 10;
        console.log(`Jami narxi: ${result} $`);
        break;
    case price > 50 && price < 100:
        result = price + 5;
        console.log(`Jami narxi: ${result} $`);
        break;
    case price > 100:
        result = price;
        console.log(`Jami narxi: ${result} $`);
        break;
    default:
        console.log('Xatolik yuzberdi');
}