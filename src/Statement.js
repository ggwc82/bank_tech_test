'use strict';

function Statement(){
  this.show = [];
}

Statement.prototype.printStatement = function(){
  var print = "date || credit || debit || balance\n"
  this.show.reverse().forEach(function(transaction){
    print += transaction.date + " || " + transaction.credit + " || "
    + transaction.debit + " || " + transaction.balance + "\n"
  })
  return print
}