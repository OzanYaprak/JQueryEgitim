$(function () {
  // alert($("p").html()); //Nesnenin icerigini alir

  //Nesnenin icerigni degistir
  $("p").html("Ozan degistirdi");

  //nesnin icerigini baska bir nesneye aktarmak
  $("b").html($("p").html());

  //coklu alma
  alert($("div").html());

  var icerik = $("b").html();

  if (icerik == "Erhan") {
    alert("Bulunuyor");
  } else {
    alert("Bulunmuyor");
  }
});
