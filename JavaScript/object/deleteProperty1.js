var person = {
    name: 'Manjunatha',
    age: 28,
    greet: function(){
    console.log('hello');
  }
  };
  
  console.log(person);
  //[object Object] {
  //  age: 28,
  //  name: "Manjunatha"
  //}
  
  // name property will be deleted
  delete person.name;
  
  console.log(person);
  
  //[object Object] {
  //  age: 28
  //}
  
  console.log('name' in person); //false , name property is not present in person object
  
  console.log('age' in person); //true
  
  // loop through all the object properties
  for(var field in person){
    console.log(field);
    console.log(person[field]);
  }