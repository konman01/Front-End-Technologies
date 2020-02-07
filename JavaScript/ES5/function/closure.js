var generator = function(number){
  
    return function(){
      return number*2;
    }
  }
  
  var calc = generator(100);
  console.log(calc); // return function defn
  
  console.log(calc()); //200