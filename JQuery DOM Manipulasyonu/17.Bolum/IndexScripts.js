$(function () {
  $(".udemy").css({ width: "300px" });
  $(".udemy").css({ width: "+=50px" }); // yukarida 300 veriyoruz fakat bu satirda verilen degere 50px daha ilave ediyoruz

  console.log($(".udemy").css("width"));
});
