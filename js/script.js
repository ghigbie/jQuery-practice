// $(function() {


//   $(".red-box").fadeOut(2000);
//   setTimeout(() => {
//     $(".green-box").fadeOut(2000);
//   }, 2000);
//   $(".red-box").fadeIn(1000);
//   $(".red-box").fadeTo(2000, 0.5);
// });

$(() => {
  $('.red-box').fadeTo(1000, 0.8);
  $('.green-box').fadeTo(2000, 0.5);
  $('.blue-box').fadeTo(3000, 0.2);
  $('.blue-box').fadeToggle(2000);
  $('.blue-box').fadeToggle(1000);
});