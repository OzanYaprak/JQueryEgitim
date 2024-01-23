$(function () {
  $("#kutu1").fadeTo("slow", 0.5);
  $("#kutu2").fadeTo("slow", 0.5);
  $("#kutu3").fadeTo("slow", 0.5);
  $("#kutu4").fadeTo("slow", 0.5);

  $("#btn1").on("click", function () {
    $("#kutu1").fadeTo("slow", 0.1);
    alert("Yanlis Secim");
  });

  $("#btn2").on("click", function () {
    $('#kutu2').css('background-color', 'green');
    $("#kutu2").fadeTo("slow", 1);
    
    alert("Dogru Secim");

    $("#kutu1").fadeTo("slow", 0.1);
    $("#kutu3").fadeTo("slow", 0.1);
    $("#kutu4").fadeTo("slow", 0.1);

  });
});
