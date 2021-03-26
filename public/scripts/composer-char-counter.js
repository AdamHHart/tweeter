// Counter and error message functionality, counting characters using .keyup, and applying error messages when > 140 chars
$(function() {
  $("#tweetInput").keyup(function(event) {
    $("#countNumber").text($(this).val().length);
    let x = $(this).val().length;
    if (x > 140) {
      $(this).css("border", "2px solid red");
      $(".errorMsg").show();
      $("#countNumber").css("color", "red");
    } else {
      $(".errorMsg").hide();
      $(this).css("border", "");
      $("#countNumber").css("color", "#545149");
    }
  })
})
