var display = function(message){
  
    console.log(message);
    console.log(arguments);
    //[object Arguments] {
    //0: "Hi!"
    //}
    
    console.log(arguments.length); //1
    
    console.log(arguments[0]); //Hi
    
    console.log(arguments[1]); //undefined
    
  }
  
  display('Hi!');
  
  function message(){
    console.log('Hello!!!');
  }
  
  var msg = message;
  
  console.log(msg.name); //message
  
  console.log(msg.length); //0 -- number of argument the function expects
  
  var test = function (){
    console.log('annonymous function');
  };
  
  
  console.log(test.name);