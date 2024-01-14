$(function () {
  $("#goster").on("click", function () {
    $("div").show(1000, function () {
      alert("Div gosterildi");
    }); //1000 yazilinca div daha yavas sekilde gosteriliyor
  });
  $("#gizle").on("click", function () {
    $("div").hide(500);
  });
});
