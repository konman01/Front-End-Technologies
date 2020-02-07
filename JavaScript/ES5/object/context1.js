function fcn(){
    console.log(this);
  }
  
  
  var obj = {
    fcn: fcn
  }
  
  obj.fcn(); // context of obj object
  
  obj.fcn.bind(this)(); // binding the context to global context