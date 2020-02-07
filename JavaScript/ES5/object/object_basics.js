var person = {
  //first-name: 'Manjunatha', -- this will throw error, since we have used dash in between
  "first-name": 'Manjunatha',
  age: 28
};

console.log(person); // object
console.log(person["first-name"]); // Manjunatha

var age_par = "age";
console.log(person[age_par]); // 28 , will be useful when the we need to get the field name dynamically


var person1 = {
  name: "manjunatha",
  age: 28,
  details:{
    hobbies: ['cooking', 'sports'],
    location: 'USA'
  },
  greet: function(){
    console.log('hello');
  }
};

console.log(person1); // person1 object
console.log(person1.details); // details object
console.log(person1.details.hobbies); //["cooking", "sports"]
person1.greet(); // hello

console.log(typeof person1); //Object

console.log(typeof person1.name); // String