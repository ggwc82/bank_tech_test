'use strict';

function Account() {
	this.balance = 0;
	this.date;
	this.deposit;
}

Account.prototype.currentBalance = function() {		
	return this.balance;
};

Account.prototype.deposit = function(amount, date) {
	this.date = date;
	this.deposit = amount;
	this.balance += amount;
}

Account.prototype.withdraw = function(amount, date) {
	this.balance -= amount;
}

Account.prototype.statement = function() {
	return [{ date: this.date, credit: this.deposit }]
};