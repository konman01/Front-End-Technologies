var account = {
    cash: 12000,
    withdraw: function(amount){
      this.cash = this.cash - amount;
      console.log('Available amount:'+this.cash);
    }
  }
  
  
  Object.defineProperty(account, 'deposit',{
    value: function(amount){
      this.cash = this.cash + amount;
    }
  });
  
  account.deposit(3000);
  account.withdraw(1000); //"Available amount:14000"