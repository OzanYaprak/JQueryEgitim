$(function () {
  $("#oynat").on("click", function () {
    $("div").animate({
      marginTop: "-20px",
    });
    $("div")
      .animate({
        marginLeft: "+50px",
      })
      .queue(function () {
        alert("durdu");
        $(this).dequeue();
        $("div").clearQueue();
      });
    $("div").animate({
      marginTop: "+50px",
    });
    $("div").animate({
      marginLeft: "+50px",
    });
  });
});
