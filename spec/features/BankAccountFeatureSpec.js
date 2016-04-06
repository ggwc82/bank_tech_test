'use strict';

  describe('BankAccount', function(){

  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('will store the deposit and the date as an object in an array', function(){
  	account.deposit(2000, "10-01-2012")
  	expect(account.statement()).toEqual([{ date: "10-01-2012", credit: 2000}])
  })

  it('a deposit and withdrawal will be stored as objects', function(){
  	account.deposit(2000, "10-01-2012")
   	account.withdraw(500, "14-01-2012")
  	expect(account.statement()).toEqual([{ date: "10-01-2012", credit: 2000}, { date: "14-01-2012", debit: 500 }])
  })


})