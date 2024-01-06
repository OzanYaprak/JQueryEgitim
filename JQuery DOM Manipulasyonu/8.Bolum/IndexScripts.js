$(function () {
  // $("a").appendTo("p"); // p tag sonuna a tag eklemesi yapar
  // $("a").prependTo("p"); // p tag basina a tag eklemesi yapar

  $("#ekle").click(function () {
    $("a").appendTo("p");
  });
});
