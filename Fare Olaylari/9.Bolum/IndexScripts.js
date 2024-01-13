$(function () {
  $("p").on("mousemove", function (e) {
    $("b").text(e.pageX + " " + e.pageY);
  });
});
