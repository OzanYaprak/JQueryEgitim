$(function () {
  $("button").on("click", function () {
    $("div").toggle(500, function () {
      var islem = $("div").css("display");

      if (islem == "block") {
        $("b").text("acik");
      } else {
        $("b").text("kapali");
      }
    });
  });
});
