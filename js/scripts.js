// business logic

var beepBoop = function (lOut) {
  if (isNaN(lOut)) {
    alert ("Please input a number, Dave!");
    return '';
  };
  var outString = ''
  for (var index = 0; index <= lOut; index += 1){
    if (index % 3 === 0) {
      outString += "I'm sorry, Dave. I'm afraid I can't do that.\r\n" ;
    } else if ((index.toString()).indexOf("1") !== -1){
      outString += "Boop!" + "\r\n";
    } else if ((index.toString()).indexOf("0") !== -1){
      outString += "Beep!" + "\r\n";
    } else {
      outString += index + "\r\n";
    }
  }
  return outString;
};

// user interface logic
$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var lenOutput = parseInt($("input#range").val());
    var outText = beepBoop(lenOutput);

    if(outText !== '') {
      $(".output").text(outText);
      $("#result").show();
    } else $("#result").hide();
  });
});
