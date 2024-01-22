$(function () {
  $("#banner").on("click", function () {
    $("#banner").hide(2000);
  });
  $("button").on("click", function () {
    $("#banner").toggle(2000);
  });
});
