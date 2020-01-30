function calc(){
    var str = 'Inside function';
    return str;
  }
  
  var retured_val = calc();
  
  console.log(retured_val);
  
  function calc1(num1, num2){
    return num1 + num2;
  }
  
  
  console.log(calc1()); // NaN
  
  console.log(calc1(1, 2)); // 3
  
  console.log(calc1(1, 2, 3)); // 3
  
  var calculator = calc1
  
  console.log(calculator(1, 4));//5