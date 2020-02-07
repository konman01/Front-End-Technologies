/*<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <h1 id='test'>Header</h1>
  <ul>
    <li><a href="">link1</a></li>
    <li><a class="simple" href="">link2</a></li>
    <li><a class= "simple" href="">link3</a></li>
  </ul>
</body>
</html>*/

console.log(document.querySelector('h1')); // First Element which matches the query --h1 elemsne

console.log(document.querySelector('.simple')); //link2

console.log(document.querySelectorAll('.simple')); // Array of all elements having class Simple --link2 and link3

console.log(document.querySelectorAll('#test')); //header



