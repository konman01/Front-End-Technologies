const name = 'Manjunatha';
let age = 27;
let hashobbies = true;

/*function summarizeUsers(name, age, hashobbies) {
    
    return 'Name is ' + name + ', age is ' + age + ' and user has hobbies:' + hashobbies;
}*/

const summarizeUsers = () => {
    return 'Name is ' + name + ', age is ' + age + ' and user has hobbies:' + hashobbies;
}

const add = (a, b) => a + b; // paranthesis between the parameters is must for more than 1 arguments

const addOne = a => a + 1; // parantheses can be omitted for one argument, it is not must

const addRandom = () => 2 + 3; // paranthesis is must for 0 argument function

console.log(summarizeUsers(name, age, hashobbies));

console.log(add(2, 3));

console.log(addOne(6));

console.log(addRandom());

