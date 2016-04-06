'use strict';

function Account() {
	this.balance = 0;
	this.statement = new Statement();
}

Account.prototype.currentBalance = function() {		
	return this.balance;
};

Account.prototype.deposit = function(amount, date) {
	this.statement.addDeposit(amount, date)
	this.balance += amount;
}

Account.prototype.withdraw = function(amount, date) {
	this.statement.addWithdrawal(amount, date)
	this.balance -= amount;
}

Account.prototype.returnStatement = function() {
	return this.statement.show
};