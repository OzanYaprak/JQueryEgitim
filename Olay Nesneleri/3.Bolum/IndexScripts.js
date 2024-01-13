$(function () {
  $("body").on("click", function (event) {
    alert(event.target.nodeName);
  });

  $("a").on("click", function (event) {
    alert(event.target.href);
  });
});
