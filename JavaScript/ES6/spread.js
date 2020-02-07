const hobbies = ['sports', 'cooking'];

//copy array
const new_arr1 = hobbies.slice();
console.log(new_arr1);

//copy suing the spread;
const new_arr2 = [hobbies]; // array inside another array
console.log(new_arr2)
const new_arr3 = [...hobbies]; //copy hobbies to new array
console.log(new_arr3);

// copy object
const copied_person = { ...person };
console.log(copied_person);

// rest operator
const toArray = (...args) =>{
    return args;
}

console.log(toArray(1, 2, 3, 4));