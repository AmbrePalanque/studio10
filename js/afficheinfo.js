// $(document).ready(function(){
//     jQuery(function($){
//       var windowWidth = $(window).width();
//       var windowHeight = $(window).height();
//
//       $(window).resize(function() {
//       if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
//         location.reload();
//         return;
//       }
//       });
//     });
//
//     if ($(window).width() >= 1024) {
//
//
//       function drawImg(delay, img1, img2, img3){
//         setTimeout(function() {
//           $('.image1').attr('src', img1);
//           $('.image2').attr('src', img2);
//           $('.image3').attr('src', img3);
//           }, delay);
//       }
//
//       function hideContent(delay){
//         setTimeout(function() {
//             $('.projetContent').hide();
//           }, delay);
//       }
//
//       $('.container').click(function(e){
//         e.preventDefault();
//         $('.projetContent').show();
//         $('.projet').animate({
//           'margin-left':'-3400px'
//         }, 1200);
//         $('.toutphoto').css({
//           'margin-right': '630px'
//         });
//         var img1 = $(this).attr('data-img');
//         var img2 = $(this).attr('data-img2');
//         var img3 = $(this).attr('data-img3');
//         delayText = 200;
//         drawImg(delayText, img1, img2, img3);
//       });
//
//       $('#retour').click(function(e){
//         e.preventDefault();
//         $('.projet').animate({
//           'margin-left':'0'
//         }, 1200);
//         hideContent(1300);
//       })
//
//     }// fermeture if
//
//   });


// if ($(event.target).parents(".container container-box3").length == 0) {
//   initPanneau();
// }
