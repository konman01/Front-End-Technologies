var condition = 1; // 0 is false, values other than 0 are true for if statement, even tring
var anothercondition = true;

if(condition){
  console.log('Executing if'); // Executing if
}else if(anothercondition){
  console.log('Executed if else'); 
}
else{
  console.log('Executed else');
}

console.log(1 == true); // true -- vales are same

console.log(1 === true); // false -- values are same but not type

console.log(2 == true); // false -- only in if condition, the value other than 0 is true, not anywhere else


// for if condition
// 1   - true
// 0   - false
// 2   - true
//-67  - true
// string - true
// null - false