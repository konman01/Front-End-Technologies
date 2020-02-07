/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <button>click me</button>
</body>
</html>
*/


window.onload = function(){
    console.log('Window loaded!');
  };
  
  // on loading the window, the function will be executed
  
  // get the button
  var btn = document.querySelector('button');
  
  // define onclick function 
  btn.onclick = function(){
    console.log('clicked');
  }
  
  btn.onclick = function(){
    console.log('also click'); // only this function will be executed
  }