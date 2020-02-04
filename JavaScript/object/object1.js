var person = {
  name: "manjunatha",
  age: 28,
  details:{
    hobbies: ['cooking', 'sports'],
    location: 'USA'
  },
  greet: function(){
    console.log('hello, ');
  }
};

person.name = 'manju'; // this will alter the existing value of the property
person.middle = 'koni'; // this will add new perperty to the object

console.log(person);