$(function () {
  $("#islem").on("click", function () {
    $("div").fadeIn(5000);
  });

  $("#durdur").on("click", function () {
    $("div").stop(); //olayi anlik durduruyor
  });
});
