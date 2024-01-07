//Bir nesneyi komple sayfadan kaldirmak icin kullanilir

$(function () {
  $("button").on("click", function () {
    $("p").remove();
    $("input").eq(0).remove(); //Sifirinci indis sirasindaki input kaldirilir
    $("li").eq(0).remove();
  });
});
