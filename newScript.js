<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

$(document).ready(function(){
  let kepress = "KEYPRESSED";
})

document.addEventListener("dblclick", (event) => {
  console.log(event);
});

$("textInput").keydown(function() {
  $(this).addClass("clicked");
})