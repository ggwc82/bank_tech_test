'use strict';

function Statement(){
	this.show = [];
}

Statement.prototype.addDeposit = function(amount, date, balance) {
	this.show.push({ date: date, credit: amount, debit: "", balance: balance })
};

Statement.prototype.addWithdrawal = function(amount, date, balance) {
	this.show.push({ date: date, credit: "", debit: amount, balance: balance })
};