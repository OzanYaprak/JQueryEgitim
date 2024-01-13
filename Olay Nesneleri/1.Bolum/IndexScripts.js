$(function () {
  $("b").on("click", function (event) {
    alert(event.currentTarget.nodeName);
  });

  $("p").on("click", function (event) {
    alert(event.currentTarget.nodeName);
  });
});
