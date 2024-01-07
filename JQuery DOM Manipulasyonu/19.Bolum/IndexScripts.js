$(function () {
  $("button").on("click", function () {
    var liste = $("select").val();
    if (liste == "html") {
      alert("html secildi");
    }
    if (liste == "dotNet") {
      alert("dotNet secildi");
    }
    if (liste == "php") {
      alert("php secildi");
    }
  });
});
