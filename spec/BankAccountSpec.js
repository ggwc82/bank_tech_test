'use strict';

  describe('BankAccount', function(){

  var account;

  beforeEach(function(){
    account = new BankAccount();
  })

  it('starts with a balance of 0', function(){
    expect(account.currentBalance()).toEqual(0)
  })

})