$(document).ready(function() {
  var account = new Account();
  updateBalance();


  function updateBalance(){
    $('#balance').empty();
    $('#balance').text(account.currentBalance());
  };

  $("#update").click(function(e) {
    e.preventDefault()
    var date = $('#date').val();
    var deposit1 = $('#deposit').val();
    account.deposit(deposit1, date);
    updateBalance();
  });
})

