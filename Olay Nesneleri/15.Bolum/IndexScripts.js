$(function () {
  $("a").on("click", function (event) {
    event.preventDefault();
    $("b").text(event.type + " Iptal edildi");
  });
});
