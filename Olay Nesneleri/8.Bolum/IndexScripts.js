$(function () {
  $(document).on("keydown", function (event) {
    if (event.shiftKey) {
      $("b").text("Basildi");
    }
  });
});
