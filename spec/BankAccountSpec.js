'use strict';

  describe('BankAccount', function(){

  var account;

  beforeEach(function(){
    account = new BankAccount();
  })

  it('starts with a balance of 0', function(){
    expect(account.currentBalance()).toEqual(0)
  })

  it('can take a deposit with a date and update the balance', function(){
  	account.deposit(2000, "10-01-2012")
  	expect(account.currentBalance()).toEqual(2000)
  })

  it('can allow a withdrawal with a date and update the balance', function(){
  	account.deposit(2000, "10-01-2012")
  	account.withdraw(500, "14-01-2012")
  	expect(account.currentBalance()).toEqual(1500)  	
  })

  it('will store the deposit and the date as an object in an array', function(){
  	account.deposit(2000, "10-01-2012")
  	expect(account.statement()).toEqual([{ date: "10-01-2012", credit: 2000}])
  })


})