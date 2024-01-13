$(function () {
  $("#button1").on("click", function () {
    alert("Buton 1 Tetiklendi");
  });

  $("#button2").on("click", function () {
    $("#button1").trigger("click");
  });
});
