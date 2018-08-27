$(function() {


  $(".red-box").fadeOut(2000);
  setTimeout(() => {
    $(".green-box").fadeOut(2000);
  }, 2000);
  $(".red-box").fadeIn(1000);
});