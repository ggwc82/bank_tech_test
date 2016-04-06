'use strict';

function Statement(){
	this.show = [];
}

Statement.prototype.addDeposit = function(amount, date) {
	this.show.push({ date: date, credit: amount })
};

Statement.prototype.addWithdrawal = function(amount, date) {
	this.show.push({ date: date, debit: amount })
};