// functiona will be executed immediatly,


(function calc(){
    console.log('hello');
  })(); //hello
  
  (function calc(){
    var number = 10;
    console.log(number);
  })();
  
  //IIFE is used to not polute the global context variables
  

  // passing values to iife
  (function calc(input){
    var number = 10;
    console.log(input);
  })(11); //11
  
  
  // changing value of global context data
  var obj = {};
  
  (function print(input){
    obj.name = "Manjunatha";
  })(obj);
  
  console.log(obj);
  
  //[object Object] {
   // name: "Manjunatha"
  //}