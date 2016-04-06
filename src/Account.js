'use strict';

function Account() {
	this.balance = 0;
	this.statement = new Statement();
}

Account.prototype.currentBalance = function() {		
	return this.balance;
};

Account.prototype.deposit = function(amount, date) {
	this.balance += amount;
	this.statement.addDeposit(amount, date, this.balance)
}

Account.prototype.withdraw = function(amount, date) {
	this.balance -= amount;
	this.statement.addWithdrawal(amount, date, this.balance)
}

Account.prototype.returnStatement = function() {
	return this.statement.show
};

Account.prototype.printStatement = function(){
	return this.statement.printStatement();
}