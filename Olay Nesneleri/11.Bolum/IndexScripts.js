$(function () {
  var gecenZaman, simdikiZaman;

  $("html").on("click", function (event) {
    if (simdikiZaman) {
      gecenZaman = event.timeStamp - simdikiZaman;
      $("html").append("Suan :" + event.timeStamp + "<br>");
      $("html").append("Son olaydan bu yana gecen sure" + gecenZaman + "<br>");
    } else {
      $("html").append("tikla<br>");
    }

    simdikiZaman = event.timeStamp;
  });
});
