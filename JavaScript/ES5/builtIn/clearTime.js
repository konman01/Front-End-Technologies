var interval = setInterval(function(){
    console.log('ping');
  }, 500);
  
  setTimeout(function(){
    clearInterval(interval);
  }, 2500);