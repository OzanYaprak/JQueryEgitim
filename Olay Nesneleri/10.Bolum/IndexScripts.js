$(function () {
  $("p").on("test.paragraf", function (event) {
    alert(event.namespace);
  });
  $("button").on("click", function (event) {
    $("p").trigger("test.paragraf");
  });
});
