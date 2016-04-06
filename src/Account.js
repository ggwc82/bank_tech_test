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
	var output = "date || credit || debit || balance\n"
	this.statement.show.reverse().forEach(function(transaction){
		output += transaction.date + " || " 
		+ transaction.credit.toString() + " || "
		+ transaction.debit.toString() + " || "
		+ transaction.balance.toString() + "\n"
	})
	return output
}