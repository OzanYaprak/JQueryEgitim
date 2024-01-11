$(function () {
  var say = $("li").get();
  $("b").text("İçerik: " + $(say).eq(3).text())
});