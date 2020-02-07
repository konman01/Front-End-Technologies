console.log('-----------------Loop-----------------------');

for (var i = 0; i < 5; i++){
  console.log(i);
}

console.log('--------------Nested Loop-----------------------');

for(var i=0; i<5; i++){
  
  for(var j=0; j<2; j++){
    
    console.log(i * j);   
  }
  
}


console.log('---------------Break Loop-----------------------');

for (var i = 0; i<5; i++){
  
  if(i == 1){
    break;
  }
  
  console.log(i);
  
}

console.log('---------------Continiue Loop-----------------------');

for (var i = 0; i<5; i++){
  
  if(i == 1){
    continue;
  }
  
  console.log(i);
  
}


// break and continue refers to the loop in which it is written 
// no to wrapping loop


console.log('---------------Looping through Array-----------------------');

var array = [1, 2, 3];
for (var i =0; i< 5; i++){
  console.log(array[i]); // index 3 and 4 contains the undefined val
  
}


console.log('---------------Looping through Array-----------------------');


var array = [1, 2, 3];
for (var i =0; i< array.length; i++){
  console.log(array[i]); // index 3 and 4 contains the undefined val
  
}



console.log('---------------While loop-----------------------');

var number = 5;

while(number < 7){
  console.log(number);
  number++;
  
}

console.log('---------------do While loop-----------------------');


var condition = false;
do{
   console.log('Executed');
}while(condition);




















