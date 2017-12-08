var countNumbers = function(inputNumber) {
  var results = [];
  var userName = "Dave";
  if (parseInt(inputNumber) % 3 === 0) {
    var results = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
  } else if (inputNumber.match(/0/)) {
    var results = "Beep!";
  } else if (inputNumber.match(/1/)) {
    var results = "Boop!";
  } else {
    for (i = 0; i <= parseInt(inputNumber); i++) {
      results[i] = " " + i;
    }
  }
  return results;
}

// front end
$(document).ready(function() {

  $("#formBeepBoop").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#inputNumber").val();
    var result = countNumbers(inputNumber);
    $("#beepBoopOutput").text(result);
  });

});
