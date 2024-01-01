$("#button1").click(function () {
  $("#loremYazisi_1").css("color", "orange");

  $(".loremYazisi_2").css("color", "lightblue");

  $("body").append("<hr>");
});

$(document).ready(function () {
  $("#button1").html("Goster");
  $("#button2").html("Degistir");
});

// id ve class ayni anda secme islemi ;

$("button").click(function () {
  $(".loremYazisi_2, #loremYazisi_1").css("color", "grey");
});
