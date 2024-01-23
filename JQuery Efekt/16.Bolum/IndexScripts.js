$(function () {
  $("#sol").on("click", function () {
    $("div").animate({
      marginLeft: "-=50px",
    });
  });

  $("#sag").on("click", function () {
    $("div").animate({
      marginLeft: "+=50px",
    });
  });

  $("#yukari").on("click", function () {
    $("div").animate({
      marginBottom: "+=50px",
    });
  });

  $("#asagi").on("click", function () {
    $("div").animate({
      marginTop: "+=50px",
    });
  });
});
