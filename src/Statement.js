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
Statement.prototype.printStatement = function(){
  return this.print(this.show);
}

Statement.prototype.printDepositsStatement = function(){
  var filtered_array = this.show.filter(function(transaction){
    return transaction.debit == ""
  })
  return this.print(filtered_array);
}

Statement.prototype.print = function(filter){
  var output = "date || credit || debit || balance\n"
  filter.reverse().forEach(function(transaction){
    output += transaction.date + " || " + transaction.credit.toString() + " || "
    + transaction.debit.toString() + " || " + transaction.balance.toString() + "\n"
  })
  return output
}
