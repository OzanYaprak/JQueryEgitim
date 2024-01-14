$(function () {
  $(document).on("keydown", function (event) {
    if (event.ctrlKey) {
      $("b").text("Ctrl Basildi");
    }
    if (event.shiftKey) {
      $("b").text("Shift Basildi");
    }
    if (event.altKey) {
      $("b").text("Alt Basildi");
    }
  });
});
