describe('Account', function(){

  var account;
  var statement;
  var output = 'date || credit || debit || balance\n"14-01-2012" || || 500 || 1500\n"10-01-2012" || 2000 || || 2000';

  beforeEach(function(){
    statement = [];
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

  it('can print a statement', function(){
    account.deposit(2000, "10-01-2012")
    account.withdraw(500, "14-01-2012")
    spyOn(account, "printStatement").and.returnValue(output)
    expect(account.printStatement()).toEqual (output)   
  })
})