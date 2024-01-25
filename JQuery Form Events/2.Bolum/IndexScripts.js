$(function () {
  $("#islem").blur(function () {
    var cevap = $("#islem").val();
    if (cevap == "ozan") {
      $("b").text("Dogru Bilgi!");
    } else {
      $("b").text("Yanlis Bilgi!");
    }
  });
});
