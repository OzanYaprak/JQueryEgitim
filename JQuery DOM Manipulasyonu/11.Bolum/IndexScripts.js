$(function () {
  $("div").clone().insertAfter("p");
  $("div").clone().insertBefore("p");

  $("input").clone().insertBefore("input").before('</br></br>');
});
