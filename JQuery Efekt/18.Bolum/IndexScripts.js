$(function () {
  $("#islem").on("click", function () {
    $("div").fadeIn(5000);
    $("div").animate({
      width: "+=100px",
    });
  });

  $("#durdur").on("click", function () {
    $("div").finish(); //olayi tamamlayip bitiriyor
  });
});
