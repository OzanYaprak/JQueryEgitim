$(function () {
  $("button").on({
    mouseenter: function () {
      $(this).animate({ marginLeft: "+=100px" }, "fast");
    },
    mouseleave: function () {
      $(this).animate({ marginLeft: "0px" }, "fast");
    },
  });
});
