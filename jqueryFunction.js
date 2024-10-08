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

  // need give a position to the element for the animation to work
  $("#pressstart").on("click", function () {
    $("p").animate({top: "900px"});
      // .addClass("w3-center w3-animate-bottom")
      // .css("animation-direction", "alternate-reverse");
    //$("#YourElementID");
    console.log("animation");
  });
});

/* variable that stores the sound effect for when we click on the text*/
var snd = new Audio("sounds\\discord-notification.mp3");
/* function that plays the sound effect whitout delay */
function playsound() {
  /* plays sound effect */
  snd.play();
  /* remove delay so you can spam */
  snd.currentTime = 0;
}
