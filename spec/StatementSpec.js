'use strict';

describe('Statement', function(){

	var statement;

	beforeEach(function(){
		statement = new Statement();
	})

	it('initializes as an empty array', function(){
		expect(statement.show).toEqual ([])
	})

	it('stores a deposit with the date as an object', function(){
		statement.addDeposit(2000, "10-01-2012")
		expect(statement.show[0]).toEqual ({date: "10-01-2012", credit: 2000})
	})

	it('stores a deposit and withdrawal', function(){
		statement.addDeposit(2000, "10-01-2012")
		statement.addWithdrawal(500, "14-01-2012")
		expect(statement.show).toEqual ([{date: "10-01-2012", credit: 2000}, {date: "14-01-2012", debit: 500}])
	})
})