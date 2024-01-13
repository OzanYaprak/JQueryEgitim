$(function () {
  $("p").on("mouseup", function () {
    $("b").text("Birakildi");
  });
  $("p").on("mousedown", function () {
    $("b").text("Tiklandi");
  });
});
