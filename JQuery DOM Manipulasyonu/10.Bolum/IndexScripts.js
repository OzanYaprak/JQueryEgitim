$(function () {
  $("#ekle").click(function () {
    $("#yukle:last").before("<input type='file' name='yukle[]'><br/><br/>");
  });
});
