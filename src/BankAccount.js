'use strict';

function BankAccount() {
	this.balance = 0;
}

BankAccount.prototype.currentBalance = function() {		
	return this.balance;
};

BankAccount.prototype.deposit = function(amount) {
	this.balance += amount;
}

