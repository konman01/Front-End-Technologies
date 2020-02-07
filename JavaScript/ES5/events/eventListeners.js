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



// get the button
var btn = document.querySelector('button');

var listener1 = function(){
  console.log('clicked');
}

var listener2 = function(){
  console.log('also clicked');
}

btn.addEventListener('click', listener1);

btn.addEventListener('click', listener2);

//both function will be execured

setTimeout(function(){
  btn.removeEventListener('click', listener1);
}, 5000);

// After 5 seconds listener1 will be removed