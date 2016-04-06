'use strict';

describe('Deposit', function(){

  it("creates a deposit object with date, deposit amount, and updated balance", function(){
    var deposit = new Deposit(2000, "22-01-2015", 2000)
    expect(deposit.credit).toEqual(2000)
    expect(deposit.balance).toEqual(2000)
  })
})