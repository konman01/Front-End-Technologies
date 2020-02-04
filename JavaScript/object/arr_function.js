var array = [1,2, 3];
array[5] = 100;
console.log(array); // [1, 2, 3, undefined, undefined, 100]

console.log('----------------------------for each-------------------------------');
array.forEach(function(element){
  console.log(element); // 1
});


console.log('----------------------------push-------------------------------');

array.push(200); // push elelment at last

console.log(array); //[1, 2, 3, undefined, undefined, 100, 200]

console.log('----------------------------pop-------------------------------');

console.log(array.pop()); //200 pop last element

console.log(array); //[1, 2, 3, undefined, undefined, 100]

console.log('----------------------------shift-------------------------------');

array.shift(); // remove first element from the array

console.log(array); // [2, 3, undefined, undefined, 100]

console.log('----------------------------unshift-------------------------------');

array.unshift(20); // pushing element at first index of the array

console.log(array);

array.unshift(3);

console.log('----------------------------indexOf-------------------------------');
console.log(array.indexOf(3)); // index of first occurance of element 3

console.log('----------------------------splice-------------------------------');

var newArray1 = array.splice(4); // new array with copy of elelent from index 2 to end of the array

console.log(newArray1); //[undefined, undefined, 100]
console.log(array); //[undefined, undefined, 100]

var newArray2 = array.splice(2, 3);

console.log(newArray2); // [2, 3]

// splice will trimm the original array
// slice will copy element from original array, it wont modify the original array

var arr = [1, 2, 3, 4, 5];

console.log('----------------------------filter-------------------------------');

var arr1 = arr.filter(function(val){
    return val > 2;
});

console.log(arr1); // [3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5];


console.log('----------------------------map-------------------------------');


var arr2 = arr.map(function(val){
  return val = val * 2;
});

console.log(arr); //[1, 2, 3, 4, 5]
console.log(arr2); //[2, 4, 6, 8, 10]

console.log('----------------------------reverse-------------------------------');

arr.reverse();

console.log(arr); // [5, 4, 3, 2, 1] -- original array will be modified

console.log('----------------------------concat-------------------------------');

var arr1 = [1, 2, 3];
var arr2 = ['join', 'me'];
var arr3 = arr1.concat(arr2);
console.log(arr1); //[1, 2, 3]
console.log(arr2); //["join", "me"]
console.log(arr3); //[1, 2, 3, "join", "me"]

console.log('----------------------------reduce-------------------------------');

var arr4 = [1, 2, 3, 4, 5];
var total_val = array.reduce(function(total, val){
  return total + val;
});

console.log(total_val);








 
 
 