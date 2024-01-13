$(function () {
  $("button").on("mousedown", function (event) {
    $("b").text(event.which);
  });
});
