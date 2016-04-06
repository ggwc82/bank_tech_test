describe('Account', function(){

  var account;

  beforeEach(function(){
    account = new Account();
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

})