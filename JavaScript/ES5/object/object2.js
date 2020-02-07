var person = {
  name: "manjunatha",
  age: 28,
  details:{
    hobbies: ['cooking', 'sports'],
    location: 'USA'
  },
  greet: function(){
    console.log('hello, I am ' + name); // this name refrence to global variable
  }
};

person.greet();

var person1 = {
  name: "manjunatha",
  age: 28,
  details:{
    hobbies: ['cooking', 'sports'],
    location: 'USA'
  },
  greet: function(){
    console.log('hello, I am ' + this.name); // this name refrence to object properties
  }
};

person1.greet();



// Difference Way of creating the object
var person = new Object();
person.name = 'Manjunatha';
person.name = 27;
console.log(person); //[object Object] {
                    //name: 27
                    //}