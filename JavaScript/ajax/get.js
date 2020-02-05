var http = new XMLHttpRequest();

var url = "https://jsonplaceholder.typicode.com/posts";
var method = 'GET';

http.open(method, url);

http.onreadystatechange = function(){
   console.log(http.responseText)
  if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
    console.log(JSON.parse(http.responseText))
  }else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200){
    console.log('error');
  }
};

http.send();