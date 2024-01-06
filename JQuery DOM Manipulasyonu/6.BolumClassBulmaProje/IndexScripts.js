$(function () {
  var sor = $("div").hasClass("ozan");

  $("button").click(function () {
    if (sor === true) {
      document.write("Bulunuyor");
    } else {
      document.write("Bulunmuyor");
    }
  });
});
