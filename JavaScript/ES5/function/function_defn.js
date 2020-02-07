function calc(){
  
    console.log('Inside function');
  }
  
  calc(); // 'Inside function'
  
  
  var anotherFun1 = function(){
    console.log('calling anotherFun1');  
  }
  
  anotherFun1(); //calling anotherFun1
  
  console.log(typeof anotherFun1); // "function"
  
  var test = anotherFun1();
  
  //test(); // Error
  
  console.log(typeof test); // undefined
  
   