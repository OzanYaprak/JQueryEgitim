$(function () {
  $("#key").on("keydown", function (event) {
    if (event.which == 52) {
      $("b").text("$ isaretine bastin hemen onu sil");
    } else {
      $("b").text(" ");
    }
  });
});
