$(function () {
  $("#formSubmit").submit(function (event) {
    if ($("ad").val() != 'ozan') {
      alert("sadece 4 girilebilinir");
      event.preventDefault();
    }
  });
});
