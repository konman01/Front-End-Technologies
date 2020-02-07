function Person(name, age){
  this.name = name;
  this.age = age;
  this.greet = function(){
     console.log('hello,'+ this.name);
  };
}

var person1 = new Person('Manjunatha', 25);
var person2 = new Person('Koni', 25);

person1.greet(); // hello, Manjunatha
person2.greet(); // hello, Koni