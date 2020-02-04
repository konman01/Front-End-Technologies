function fcn(message){
    console.log(message + this);
  }
  
  
  var obj = {
    fcn: fcn
  }
  
  var person = {
    name: 'Manjunatha'
  }
  
  obj.fcn.bind(person, 'Message By MKG')(); // "Message By MKG[object Object]"
  
  obj.fcn.call(person, 'Message By Konman01'); //"Message By Konman01[object Object]"
  
  obj.fcn.apply(person, ['mgururaja']); //"Message[object Object]"