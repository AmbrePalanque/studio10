$(document).ready(function(){
  if ($(window).width() <= 1024) {
    var galerie = $("#galerie")
    var galeriePosition = galerie.position().left;
    $("#decouvrir").click(function(){
      $("main").animate({
        scrollLeft: galeriePosition
      }, 1000);
    });
    $("#Découvrir").click(function(){
      $("main").animate({
        scrollLeft: galeriePosition
      }, 1000);
    });

    $("#cohabysContent").hide();
    $("#etat_libreContent").hide();
    $("#ethik4FoodContent").hide();
    $("#footContent").hide();
    $("#lanuitContent").hide();
    $("#visiteContent").hide();


    $( "#cohabys" ).click(function() {
      $("#cohabysContent").show();
      $(".projet").animate({width: 0}, 3000 ).hide(2000);
      $("main").stop().delay(3000).animate({
        scrollLeft: 0
      }, 3000);
    });
    $( "#visite" ).click(function() {
      $("#visiteContent").show();
      $(".projet").animate({width: 0}, 3000 ).hide(2000);
      $("main").stop().delay(3000).animate({
        scrollLeft: 0
      }, 3000);
    });
    $( "#etatlibre" ).click(function() {
      $("#etat_libreContent").show();
      $(".projet").animate({width: 0}, 3000 ).hide(2000);
      $("main").stop().delay(3000).animate({
        scrollLeft: 0
      }, 3000);
    });
    $( "#ethick4food" ).click(function() {
      $("#ethik4FoodContent").show();
      $(".projet").animate({width: 0}, 3000 ).hide(2000);
      $("main").stop().delay(3000).animate({
        scrollLeft: 0
      }, 3000);
    });
    $( "#foot" ).click(function() {
      $("#footContent").show();
      $(".projet").animate({width: 0}, 3000 ).hide(2000);
      $("main").stop().delay(3000).animate({
        scrollLeft: 0
      }, 3000);
    });
    $( "#nuitdugene" ).click(function() {
      $("#lanuitContent").show();
      $(".projet").animate({width: 0}, 3000 ).hide(2000);
      $("main").stop().delay(3000).animate({
        scrollLeft: 0
      }, 3000);
    });
  }
});
