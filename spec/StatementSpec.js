'use strict';

describe('Statement', function(){

  var statement;
  var output = 'date || credit || debit || balance\n14-01-2012 ||  || 500 || 1500\n10-01-2012 || 2000 ||  || 2000\n';
  var deposit;
  var withdrawal;

  beforeEach(function(){
    statement = new Statement();
    deposit = {
    date: "10-01-2012",
    credit: 2000,
    debit: "",
    balance: 2000 }

    withdrawal = {
    date: "14-01-2012",
    credit: "",
    debit: 500,
    balance: 1500 }

  })

  it('initializes as an empty array', function(){
    expect(statement.show).toEqual ([])
  })

  it('prints out a statement in the correct format', function(){
    statement.show = [deposit, withdrawal]
    expect(statement.printStatement()).toEqual(output)    
  })
})