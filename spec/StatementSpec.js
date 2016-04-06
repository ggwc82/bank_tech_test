'use strict';

describe('Statement', function(){

	var statement;
  var output = 'date || credit || debit || balance\n14-01-2012 ||  || 500 || 1500\n10-01-2012 || 2000 ||  || 2000\n';
  var outputDescending = 'date || credit || debit || balance\n10-01-2012 || 2000 ||  || 2000\n14-01-2012 ||  || 500 || 1500\n'; 
  var depositsOnly = 'date || credit || debit || balance\n10-01-2012 || 2000 ||  || 2000\n';
  var withdrawalsOnly = 'date || credit || debit || balance\n14-01-2012 ||  || 500 || 1500\n';


	beforeEach(function(){
		statement = new Statement();
		statement.addDeposit(2000, "10-01-2012", 2000)
		statement.addWithdrawal(500, "14-01-2012", 1500)
	})

	it('stores deposits and withdrawls with date and updated balances', function(){
		expect(statement.show).toEqual ([{date: "10-01-2012", credit: 2000, debit: "", balance: 2000}, {date: "14-01-2012", credit: "", debit: 500, balance: 1500}])
	})

  it('can print a statement', function(){
    expect(statement.printStatement()).toEqual (output)   
  })

	it('can filter statement by deposits only', function(){
    expect(statement.printDepositsStatement()).toEqual (depositsOnly)				
	})

	it('can filter statement by withdrawals only', function(){
    expect(statement.printWithdrawalsStatement()).toEqual (withdrawalsOnly)				
	})

	it('can filter statement by date decending', function(){
    expect(statement.printDateDescendingStatement()).toEqual (outputDescending)				
	})
})