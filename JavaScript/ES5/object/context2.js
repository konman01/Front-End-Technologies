function fcn(){
    console.log(this);
  }
  
  
  var obj = {
    fcn: fcn
  }
  
  var person = {
    name: 'Manjunatha'
  }
  
  obj.fcn.bind(person)(); // binding the context to person obejct context
  