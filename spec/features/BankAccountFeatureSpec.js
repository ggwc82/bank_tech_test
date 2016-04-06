'use strict';

  describe('Feature Spec', function(){

  var account;
  var output = "date || credit || debit || balance\n14-01-2012 ||  || 500 || 1500\n10-01-2012 || 2000 ||  || 2000\n"

  beforeEach(function(){
    account = new Account();
    account.deposit(2000, "10-01-2012")
    account.withdraw(500, "14-01-2012")
  })

  it('a deposit and withdrawal will be stored as objects with updated balances', function(){
  	expect(account.returnStatement()[0]).toEqual(jasmine.any(Deposit))
    expect(account.returnStatement()[1]).toEqual(jasmine.any(Withdrawal))
  })

  it('can print the statement', function(){
    expect(account.printStatement()).toEqual(output)
  })
})