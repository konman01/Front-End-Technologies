function Person(){

}

var person1 = new Person();
person1.name = 'Manju';
console.log(person1); 

//[object Object] {
//  name: "Manju"
//}

console.log(person1.__proto__ == Person); // false

console.log(person1.__proto__ == Object.prototype); // false

console.log(person1.__proto__ == Person.prototype); // true

// Person.prototype onject will be automatically created when the object is created
// using the Person constructor