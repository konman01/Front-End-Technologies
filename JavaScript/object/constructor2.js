function Person(){
  
    this.name = 'Manjunatha';
    this.greet =  function(){
      console.log('Hello, '+this.name);
    };
  
  }
  
  var person1 = new Person();
  console.log(person1.name); //Manjunatha
  person1.name = 'Koni';
  console.log(person1.name); // Koni
  
  var person2 = new Person();
  console.log(person2.name);  //Manjunatha
  
  // Defining the function for prototype of Person
  Person.prototype.greetGeneral = function(){
    console.log('hello.');
  }
  
  person1.greetGeneral(); // hello.
  
  console.log(person1 instanceof Person); // true
  
  console.log(person2 instanceof Person); // true