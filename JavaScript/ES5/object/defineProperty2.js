console.log('--------------------------Define Setter-------------------------------');
var account = {
  cash: 12000,
  withdraw: function(amount){
    this.cash = this.cash - amount;
    console.log('Available amount:'+this.cash);
  }
}


Object.defineProperty(account, 'name',{
  value: 'ID-0001'
}
);


account.withdraw(1000); //"Available amount:11000"
console.log('name:'+account.name); //"name:ID-0001"
account.name = 'ID-0002'; //"name:ID-0001" , because the property defined in define property is readOnly, so cannot be changes by default
console.log('name:'+account.name);

console.log('--------------------------Define Setter Writable-------------------------------');


var account1 = {
  cash: 12000,
  withdraw: function(amount){
    this.cash = this.cash - amount;
    console.log('Available amount:'+this.cash);
  }
}


Object.defineProperty(account1, 'name',{
  value: 'ID-0001',
  writable: true
}
);


account1.withdraw(1000); //"Available amount:11000"
console.log('name:'+account1.name); //"name:ID-0001"
account1.name = 'ID-0002'; //"name:ID-0002, it is writable now 
console.log('name:'+account1.name);

// getters and setter
console.log('--------------------------Define Setter-------------------------------');


var account2 = {
  _name: 'defualt',
  cash: 12000,
  withdraw: function(amount){
    this.cash = this.cash - amount;
    console.log('Available amount:'+this.cash);
  }
}


Object.defineProperty(account2, 'name',{
  // function will be executed wheneven the name property of object account2 is called
  get: function(){
    return this._name;
  },
  set: function(name){
    this._name = name;
  }
}
);

console.log(account2.name);

account2.name = 'ID0004';

console.log(account2.name);



