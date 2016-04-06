'use strict';

describe('Statement', function(){

	var statement;

	beforeEach(function(){
		statement = new Statement();
	})

	it('initializes as an empty array', function(){
		expect(statement.show).toEqual ([])
	})

	it('stores deposits and withdrawls with date and updated balances', function(){
		statement.addDeposit(2000, "10-01-2012", 2000)
		statement.addWithdrawal(500, "14-01-2012", 1500)
		expect(statement.show).toEqual ([{date: "10-01-2012", credit: 2000, debit: "", balance: 2000}, {date: "14-01-2012", credit: "", debit: 500, balance: 1500}])
	})
})