/*****LEV 1.1*****/

console.log(Math.PI);
console.log(Math.round(3.141592653589793));

let pi = Math.PI;

console.log(Math.round(pi) + 0.14);


let roundedPI = Math.round(pi) + 0.14;

console.log(roundedPI)

/******LEV 1.2*****/

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];
console.log(Math.round(array[0]))
console.log(Math.round(array[1]))
console.log(Math.round(array[2]))
console.log(Math.round(array[3]))

let runden = () => {
    array.forEach(i => {
        console.log(Math.round(i))
    })
}
runden();

/*********LEV 1.3*********/

let randomNum = Math.random();
console.log(randomNum);
let randomNum1_10 = Math.random() * 10;
console.log(randomNum1_10);
let randomNum1_100 = Math.random() * 100;
console.log(randomNum1_100);

/*********LEV 1.4**********/

console.log(Math.min(393, 205, 479, 47, 376, 267, 385,  // DORT kann man NUR Zahlen eintragen!
    2, 190, 383, 286, 462, 115, 138, 331,
    409, 427, 245, 224, 276, 483, 55, 147,
    177, 208, 347, 135, 282, 33, 270, 475,
    426, 476, 453, 474, 351, 219, 358, 354,
    410, 240, 139, 371, 356, 277, 202, 264,
    204, 447, 488));

console.log(Math.max(393, 205, 479, 47, 376, 267, 385,
    2, 190, 383, 286, 462, 115, 138, 331,
    409, 427, 245, 224, 276, 483, 55, 147,
    177, 208, 347, 135, 282, 33, 270, 475,
    426, 476, 453, 474, 351, 219, 358, 354,
    410, 240, 139, 371, 356, 277, 202, 264,
    204, 447, 488));
