$(function () {
  $("#ad").on("focus", function () {
    $("b").text("Adinizi Dogru Giriniz");
  });
  $("#soyad").on("focus", function () {
    $("b").text("Soyadinizi Dogru Giriniz");
  });
});
