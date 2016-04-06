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
  var print = "date || credit || debit || balance\n"
  this.show.reverse().forEach(function(transaction){
    print += transaction.date + " || " + transaction.credit + " || "
    + transaction.debit + " || " + transaction.balance + "\n"
  })
  return print
}