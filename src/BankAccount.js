'use strict';

function BankAccount() {
	this.balance = 0;
	this.date;
	this.deposit;
}

BankAccount.prototype.currentBalance = function() {		
	return this.balance;
};

BankAccount.prototype.deposit = function(amount, date) {
	this.date = date;
	this.deposit = amount;
	this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount, date) {
	this.balance -= amount;
}

BankAccount.prototype.statement = function() {
	return [{ date: this.date, credit: this.deposit }]
};