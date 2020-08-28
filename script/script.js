function navigation() {
    //when click the hamburger menu
    $(".fa-bars").on("click", function () {
      $(".navListContainer").css("display", "block");
      $(".cancel").css("display", "initial");
      $(this).css("display", "none");
    });
  
    //when click the cancel sign
    $(".cancel").on("click", function () {
      $(this).css("display", "none");
      $(".fa-bars").css("display", "initial");
      $(".navListContainer").css("display", "none");
    });
  
    //when click the navigation options
    $(".navList li").on("click", function () {
      if ($(window).width() <= 768) {
        $(".navListContainer").css("display", "none");
        $(".fa-bars").css("display", "initial");
        $(".cancel").css("display", "none");
      }
    });
}

$('.landing').mouseenter(function(){
  console.log('the mouse is moving');
  $('.triangle, .square, .hollowSquare, .circleStripes, .cross, .hollowTraingle, .triangleStripes, .hollowTraingle, .zigzag, .zigzagTwo').toggleClass("move");
});
$('.landing').mouseleave(function(){
  console.log('the mouse left');
  $('.triangle, .square, .hollowSquare, .circleStripes, .cross, .hollowTraingle, .triangleStripes, .hollowTraingle, .zigzag, .zigzagTwo').removeClass("move");
});

    const app = {};

//start the app
app.init = function () {
  navigation();
};

$(function () {
  app.init();
});