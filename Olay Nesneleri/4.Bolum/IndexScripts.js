$(function () {
  $(document).on("mousemove", function (kordinat) {
    $("b").text(
      "X Kordinati :" + kordinat.pageX + ' ' +"Y Kordinati :" + kordinat.pageY
    );
  });
});
