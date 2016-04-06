'use strict';

  describe('Feature Spec', function(){

  var account;

  beforeEach(function(){
    account = new Account();
  })

  it('a deposit and withdrawal will be stored as objects with updated balances', function(){
  	account.deposit(2000, "10-01-2012")
   	account.withdraw(500, "14-01-2012")
  	expect(account.returnStatement()).toEqual([{ date: "10-01-2012", credit: 2000, balance: 2000}, { date: "14-01-2012", debit: 500, balance: 1500 }])
  })


})