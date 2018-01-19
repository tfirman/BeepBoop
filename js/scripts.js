// business logic

var beepBoop = function (lOut) {
  if (isNaN(lOut)) {
    alert ("Please input a number, Dave!");
    return '';
  };
  var outString = ''
  for (var index = 0; index <= lOut; index += 1){
    if (index % 3 === 0) {
      outString += "I'm sorry, Dave. I'm afraid I can't do that.\n" ;
    } else {
      outString += index + "\n";
    }
  }
  alert (outString);
  return outString.slice(0, -2);
};

// user interface logic
$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var lenOutput = parseInt($("input#range").val());
    var outText = beepBoop(lenOutput);

    if(outText !== '') $(".output").text(outText);

    if(outText !== '') $("#result").show();
    if(outText === '') $("#result").hide();
  });
});
