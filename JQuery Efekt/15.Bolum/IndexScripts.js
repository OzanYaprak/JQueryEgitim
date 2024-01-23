$(function () {
  $("button").on("click", function () {
    $("div").animate({
      width: "500px",
      height: "500px",
    });
    $("button").animate({
      width: "500px",
    });
  });
});
