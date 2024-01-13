$(function () {
  $("li").on("mouseover", function (event) {
    alert(event.relatedTarget.nodeName);
  });
});
