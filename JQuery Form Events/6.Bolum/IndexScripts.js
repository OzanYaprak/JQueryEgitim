// $(function () {
//   $("#ad").on("select", function () {
//     $("b").text("Secildi");

//     if (document.execCommand("copy")) {
//       alert("kopyalama basarili");
//     }
//   });
// });


$(function () {
  $("#ad").on("select", function () {
    var selectedText = window.getSelection().toString();
    $("b").text("Seçildi");

    navigator.clipboard.writeText(selectedText)
      .then(function () {
        alert("Kopyalama başarılı");
      })
      .catch(function (err) {
        alert("Kopyalama başarısız: ", err);
      });
  });
});
