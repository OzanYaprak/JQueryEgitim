$(function () {
  $(document).on("mousemove", function (e) {
    $("b").text("X Kord. :" + e.screenX + " " + "Y Kord. :" + e.screenY);
  });
});
