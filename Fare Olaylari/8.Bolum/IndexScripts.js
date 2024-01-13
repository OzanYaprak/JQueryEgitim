$(function () {
  $("p").on("mouseenter", function () {
    $("b").text("Geldi");
  });
  $("p").on("mouseout", function () {
    $("b").text("Gitti");
  });
});
