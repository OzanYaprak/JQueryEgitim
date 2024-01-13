$(function () {
  $("html").on("mousedown", function (event) {
    var olay = event.which;

    // if (olay == 1) {
    //   alert("mouse 1 tiklandi");
    // }
    // if (olay == 2) {
    //   alert("mouse 2 tiklandi");
    // }
    // if (olay == 3) {
    //   alert("mouse 3 tiklandi");
    // }

    switch (olay) {
      case 1:
        alert("Sol Tusa Basildi");
        break;
      case 2:
        alert("Orta Tusa Basildi");
        break;
      case 3:
        alert("Sag Tusa Basildi");
        break;
    }

    $("b").text(event.which);
  });
});
