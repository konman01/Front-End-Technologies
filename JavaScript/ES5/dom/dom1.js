console.log(document.URL);
console.log(document.title);
/*console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0]);*/
console.log(document.body.children[0].textContent);
document.body.children[0].textContent = 'Something else';
document.body.children[0].style.backgroundColor = 'red'; 

console.log(document.body.children[1]); //UL
console.log(document.body.children[1].children[0]); //li 


/*

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <h1>Hello</h1>
  <ul>
    <li><a href="">link1</a></li>
    <li><a href="">link2</a></li>
    <li><a href="">link3</a></li>
  </ul>
</body>
</html>

*/