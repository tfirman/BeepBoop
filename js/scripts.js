// business logic

var beepBoop = function (lOut) {
  if (isNaN(lOut)) {
    alert ("Please input a number, Dave!");
    return '';
  };
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
