$("body").on("click", "#ekle", function () {
  $(this).after("<button id=ekle>Urett</button>");
});

$("body").on("click", "#kaldir", function () {
  $("body").off();
});
