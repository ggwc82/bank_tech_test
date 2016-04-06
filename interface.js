$(document).ready(function() {
  var account = new Account();
  updateBalance();


  function updateBalance(){
    $('#balance').text(account.balance);
  };
})