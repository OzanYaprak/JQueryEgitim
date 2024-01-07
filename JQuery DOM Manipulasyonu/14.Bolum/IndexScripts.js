$(function () {
  $("button").on("click", function () {
    $("p").empty(); // p taginin icindeki yaziyi temizliyor.
    $("p").text("temizlendi");

    $("textarea").empty();
  });
});
