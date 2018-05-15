$(document).ready(function(){
  jQuery(function($){
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
    });
  });

    if ($(window).width() <= 1024) {
        $('.panneau').css({'display': 'none'});

        $('#cohabys').click(function(){
          window.location.href = "cohabys.html";
        })

        $('#visite').click(function(){
          window.location.href = "visite.html";
        })

        $('#coucou').click(function(){
          window.location.href = "etat_libre.html";
        })
        $('#hola').click(function(){
          window.location.href = "Ethik4Food.html";
        })

        $('#quetal').click(function(){
          window.location.href = "foot.html";
        })

        $('#muibien').click(function(){
          window.location.href = "lanuit.html";
        })

        $('.actif').click(function(){
          window.location.href = "index.html";
        })

        $('.apropos-content').click(function(){
          window.location.href = "aprop.html";
        })

        $('.contact').click(function(){
          window.location.href = "contact.html";
        })

        $('h1').click(function(){
          window.location.href = "index.html";
        })
      }
  });



// if ($(event.target).parents(".container container-box3").length == 0) {
//   initPanneau();
// }
