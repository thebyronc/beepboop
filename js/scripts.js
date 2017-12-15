var countNumbers = function(inputName, inputNumber) {
  var results = [];
  var userName = "Dave";
  if (inputName != "") {
    var userName = inputName;
  } else {
    console.log("I guess I'm calling you Dave.");
  }

  var numberPrints = [];
  for (i = 0; i <= parseInt(inputNumber); i++) {
    numberPrints[i] = i;
  }
  // bot image
  if (parseInt(inputNumber) === 0) {
    results[1] = "img/bot_l.png";
    results[2] = "BEEP!"
    results[3] = ""
  } else if (parseInt(inputNumber) % 3 === 0) {
    results[1] = "img/bot_s.png";
    results[2] = ""
    results[3] = ""
  } else if (inputNumber.match(/0/)) {
    results[1] = "img/bot_l.png";
    results[2] = "BEEP!"
    results[3] = ""
  } else if (inputNumber.match(/1/)) {
    results[1] = "img/bot_r.png";
    results[2] = ""
    results[3] = "BOOP!"
  } else {
    results[1] = "img/bot_n.png";
    results[2] = ""
    results[3] = ""
  }

  // number print
  for (ip = 0; ip < numberPrints.length; ip++){
    if (numberPrints[ip] === 0) {
      numberPrints[ip] = "Beep!";
    } else if (numberPrints[ip] % 3 === 0) {
      numberPrints[ip] = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    } else if (numberPrints[ip].toString().match(/0/)) {
      numberPrints[ip] = "Beep!";
    } else if (numberPrints[ip].toString().match(/1/)) {
      numberPrints[ip] = "Boop!";
    } else {}
  }
  results[0] = numberPrints;
  return results;
}

// front end
$(document).ready(function() {

  $("#formBeepBoop").submit(function(event) {
    event.preventDefault();

    var inputName = $("#inputName").val();
    var inputNumber = $("#inputNumber").val();

    var result = countNumbers(inputName, inputNumber);
    for (printIndex = 0; printIndex < result[0].length; printIndex++) {
      $("#beepBoopOutput").append(result[0][printIndex] + "&#13;&#10;");
    }
    $("#beepBoopOutput").append("----------------------------------------------------------&#13;&#10;");
    $("#bot_left").text(result[2]);
    $("#bot_right").text(result[3]);

    document.getElementById("friendlybot").src=result[1];
  });

  $("#wipe").click(function() {
    $("#beepBoopOutput").text("");
    $("#bot_left").text("");
    $("#bot_right").text("");
    document.getElementById("friendlybot").src="img/bot_n.png";
  });

});
