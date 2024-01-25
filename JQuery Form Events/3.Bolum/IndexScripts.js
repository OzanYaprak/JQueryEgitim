$(function () {
  $("#islem").on("change", function () {
    var uzunluk = $("#islem").val();
    $("b").text(uzunluk.length);
  });
});
