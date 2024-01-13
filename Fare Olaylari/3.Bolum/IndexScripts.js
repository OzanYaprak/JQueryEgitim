$(function () {
  $("button").hover(iceride, disarida);
  function iceride() {
    $("b").text("butonun uzerindesin");
  }
  function disarida() {
    $("b").text("butondan ayrildin");
  }
});
