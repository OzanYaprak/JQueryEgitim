$(function () {
  $(document).on("keydown", function (event) {
    if (event.altKey) {
      $("b").text("Basildi");
    }
  });
});
