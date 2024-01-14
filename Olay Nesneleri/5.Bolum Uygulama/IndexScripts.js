$(function () {
  $(document).on("mousemove", function (kordinat) {
    $("b").text(
      "X Kordinati :" + kordinat.pageX + " " + "Y Kordinati :" + kordinat.pageY
    );

    if (kordinat.pageY > 79 || kordinat.pageY < 69) {
      $("#hataliKullanim").text("Astiniz");
    } else {
      $("#hataliKullanim").text(" ");
    }
  });
});
