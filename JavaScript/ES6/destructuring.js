const person = {
    name: 'Manjunatha',
    age: 25,
    greet: function () {
        console.log('Hello, i am '+this.name);
    }
}

// Destructuring, the name of the argument should matches with the object literal
let printName = ({ name }) => {
    console.log(name);
}

printName(person);

let { name, age } = person;
console.log('Name:' + name);
console.log('age:' + age);


const hobbies = ['Cooking', 'Sports'];
let [hobby1, hobby2] = hobbies;
console.log('Hobby1:' + hobby1);
console.log('Hobby2:' + hobby2);