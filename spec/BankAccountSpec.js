'use strict';

  describe('BankAccount', function(){

  var account;

  beforeEach(function(){
    account = new BankAccount();
  })

  it('starts with a balance of 0', function(){
    expect(account.currentBalance()).toEqual(0)
  })

  it('can take a deposit and update the balance', function(){
  	account.deposit(2000)
  	expect(account.currentBalance()).toEqual(2000)
  })

})