/*

<!DOCTYPE html>
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
</html>

*/

var p = document.createElement('P');
p.textContent = 'a new Paragraph';
p.style.fontSize = '17px';

/*var li = document.querySelector('li');
console.log(li);
li.appendChild(p);*/

/*var a = document.querySelector('a');
a.appendChild(p);*/

var li = document.querySelector('li')

var a = li.firstElementChild;

li.insertBefore(p, a);