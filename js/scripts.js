// business logic


// user interface logic
$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var range = parseInt($("input#range").val());
    var result = beepBoop(range);

    $(".output").text(beepBoop);

    $("#result").show();
  });
});
