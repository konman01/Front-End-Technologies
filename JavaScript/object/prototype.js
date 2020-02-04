
var person = {
    name: 'Manjunatha',
    age: 29
  };
  
  Object.prototype.greet = function(){
    console.log('Hello,'+this.name);
  }
  
  person.greet();