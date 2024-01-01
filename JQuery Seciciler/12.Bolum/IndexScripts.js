$(document).ready(function () {
  $("ul li").each(function (X) {
    alert(X + ". eleman: " + $(this).text());
  });
});
