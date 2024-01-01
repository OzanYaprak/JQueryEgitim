// $(document).ready(function () {
//   $("p").click(function () {
//     $(this).hide();
//   });
// });

// $("div").click(function () {
//   $(this).html("Udemy JQuery Egitimi");
// });

// $().ready(function () {
//   $("p").html("test yazisi");
// });

$().ready(function () {
  $("b")
    .html("test b etiketi")
    .click(function () {
      $(this).hide();
    });
});

$("div").html("Udemy JQuery Egitimi");

$("body").append("<br><br>");

$(document).ready(function () {
  for (let i = 0; i < 10; i++) {
    var yeniDiv = $("<div>", {
      text: "Ozan Tarafindan " + i + " kez yazdirilan div.",
    });

    $("body").append(yeniDiv);
  }
});

function islem() {
  $("p").html("p paragrafi acildi");
}

$("h1")
  .click(islem)
  .click(function () {
    $("button").html("Goster");
  });
