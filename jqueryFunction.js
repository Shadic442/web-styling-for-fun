/**
 * jquery that toggles the class .classWithShadow
 * on the element with the id #pressstart
 */
$(document).ready(function () {
  $("#pressstart").hover(function () {
    $(this).toggleClass("classWithShadow");
  });
});
