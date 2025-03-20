// arithmetic operators = operands (value, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

// let students = 30;

// students = students + 1; // 31
// students = students - 1; // 29
// students = students * 2; // 60
// students = students / 2; // 15
// students = students ** 2; // 900
// students = students % 4; // 2

// students += 2; // 32
// students -= 2; // 28
// students *= 2; //60
// students /= 3; //10
// students **= 2; //900
// students %= 4; //2

// students ++; //31
// students --; //29

// console.log(students);

// ==========================================

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/
//            /3\ /2\  /4\ /1\
// let result = 1 + 2 * 3 + 4 ** 2; //23
// let result = 1 + 2 * 3 + 16; // 1 - step
// let result = 1 + 6 + 16; // 2 - step
// let result = 7 + 16; // 3 - step
// let result = 23; // 4 - step

// console.log(result);

//            /1\   /3\ /2\
// let result = 12 % 5 + 8 / 2; // 6
// let result = 2 + 8 / 2; // 1 - step
// let result = 2 + 4; // 2 - step
// let result = 6; // 3 - step

// console.log(result);

//            /3\  /2\  /1\
// let result = 6 / 2 ** (2 + 5); // 0,046875
// let result = 6 / 2 ** 7; // 1 - step
// let result = 6 / 128; // 2 - step
// let result = 0,046875; // 3 - step

// console.log(result);