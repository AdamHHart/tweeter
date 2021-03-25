

// $(document).ready(function() {
//   // --- our code goes here ---
//   console.log("Document is loaded and ready.");
//   document.getElementById('textInput').keyup = function() {
//     document.getElementsByClassName('counter').innerHTML = (140 - this.value.length);
//     console.log(document.getElementsByClassName('counter'));
//   };

// });

// $(document).ready(function() {
//   // --- our code goes here ---
//   console.log("Document is loaded and ready.");
//   $("#tweetInput").input(function() {
//     $(".counter").text(140 - $(this).val().length)
//   })

// });



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

// $(function() {
//   $("#tweetInput").keyup(function(event) {
//     $("#countNumber").text($(this).val().length);
//     let x = $(this).val().length;
//     if (x === 0) {
//       $(".errorMsg").show();
//     } else {
//       $(".errorMsg").hide();
//     }
//   })
// })

