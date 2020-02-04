
// Difference Way of creating the object
var person = new Object();
person.name = 'Manjunatha';
person.name = 27;
console.log(person); //[object Object] {
                    //name: 27
                    //}


var anotherFunction = Object.create(null);
anotherFunction.hasHobbies = true;

console.log(anotherFunction);


var anotherFunction1 = Object.create(person); // prototype, -- inherits the class 
    // defined in the create function

// Defualt Prototype - Object.Prototype


anotherFunction.hasHobbies = true;

console.log(anotherFunction1);
console.log(anotherFunction1.name);