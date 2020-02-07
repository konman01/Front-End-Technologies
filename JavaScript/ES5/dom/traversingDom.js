/* 
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <ul>
    <li><a href="">link1</a></li>
    <li><a href="">link2</a></li>
    <li><a href="">link3</a></li>
  </ul>
</body>
</html>
*/

console.log(document.body.children[0].children[0]); //link1

console.log(document.body.firstChild); // space between body and ul -- " "

console.log(document.body.firstElementChild);//UL
console.log(document.body.firstElementChild.firstElementChild);// link1

console.log(document.body.lastElementChild); //Ul , this the first child and
//last child for the body

console.log(document.body.firstElementChild.firstElementChild.nextElementSibling); //link2

console.log(document.body.firstElementChild.firstElementChild.parentElement); //UL

document.querySelectorAll('.simple')[1].style.backgroundColor = 'red';

document.querySelector('.simple').textContent = 'Hello';

