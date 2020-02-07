
var person = {
  name: 'Manjunatha',
  age: 29
};

Object.prototype.greet = function(){
  console.log('Hello,'+this.name);
}

var max = Object.create(person);
var anna = Object.create(person);

console.log(anna.__proto__ == person); // true
console.log(anna.__proto__.__proto__ == Object.prototype); //true

console.log(Object.getPrototypeOf(anna) == person); // true -- Safe way of getting prototype

