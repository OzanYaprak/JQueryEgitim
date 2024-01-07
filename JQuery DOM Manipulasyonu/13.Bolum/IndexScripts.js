$(function () {
  $("button").on("click", function () {
    $("p").replaceWith("<p>Test Yazisi</p>"); //Degistirilecek olan kisim ilk kisma yazilir, ondan sonra degistirilecek olan yazi gelir.
    $("<p>Test Yazisi-2</p>").replaceAll("p"); //Degistirilecek olan kisim son kisma yazilir.
  });
});
