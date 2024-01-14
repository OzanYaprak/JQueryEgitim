$(function () {
  $("#key").on("keydown", function (event) {
    $("b").text("Basilan Tusun ASCII Karakteri :" + event.which);
  });
});
