/* Definign the number */

var number = 5;
console.log(number);
console.log(typeof number); //"number"

number = 5.1;

console.log(number);
console.log(typeof number); // "number"

/* Defining the String */

var text = 'Manjunatha';
console.log(text);
console.log(typeof text); //"string"

/* Defining the boolean */

var isTrue = true;
console.log(isTrue);
console.log(typeof isTrue); //"boolean"


/* Defining the String */

var arr = ['Manjunatha', 1, 1.3, false];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]); // undefined
console.log(typeof arr); //"object"

arr = ['Manjunatha', 1, 1.3, false,];
console.log(arr[4]); // still undefined

var undef = undefined;
console.log(undef);
console.log(typeof undef); // "undefined"

var testNull = null; // this is the way to define the variables
console.log(testNull);
console.log(typeof testNull); //"object"

console.log(undef == testNull); // true -- values are same

console.log(undef === testNull); // false -- but type are not same

var nanVal = NaN;
console.log(nanVal); //NaN , we get this value if the number cannot be defined
// like multiplication of a number with a String

console.log(typeof nanVal); //"number"


console.log(nanVal == testNull); // false

console.log(undef === nanVal); // false









