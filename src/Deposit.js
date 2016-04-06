'use strict';

function Deposit(amount, date, balance) {
	this.balance = balance;
	this.credit = amount;
	this.debit = "";
	this.date = date;
}