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

  it('can allow a withdrawal and update the balance', function(){
  	account.deposit(2000)
  	account.withdraw(500)
  	expect(account.currentBalance()).toEqual(1500)  	
  })

})