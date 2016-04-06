'use strict';

describe('Withdrawal', function(){
  it("creates a withdrawal object with date, withdrawal amount, and updated balance", function(){
    var withdrawal = new Withdrawal(2000, "22-01-2015", -2000)
    expect(withdrawal.debit).toEqual(2000)
    expect(withdrawal.balance).toEqual(-2000)
  })
})