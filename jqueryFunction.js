/**
 * jquery that toggles the class .classWithShadow
 * on the element with the id #pressstart
 */
$(document).ready(function () {
  /* on hover the text shadow appears */
  $("#pressstart").hover(function () {
    $(this).toggleClass("classWithShadow");
  });
  /* when the mouse button is press and held the text shadow disappears */
  $("#pressstart").on("mousedown", function () {
    $(this).toggleClass("classWithShadow");
  });
  /* on the release of the mouse button the text shadow appears */
  $("#pressstart").on("mouseup", function () {
    $(this).toggleClass("classWithShadow");
  });
});
