'use strict';

function Withdrawal(amount, date, balance) {
	this.balance = balance;
	this.credit = "";
	this.debit = amount;
	this.date = date;
}