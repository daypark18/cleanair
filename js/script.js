$(function(){

  var parell = { }
    parell.winHT = $(window).height();
    parell.distance = parell.winHT;
    parell.count = 0;
    parell.mnoving = false;
    parell.length = $(document).find(".page").length;

  var link = $("header .menu > li > a");

    $(window).scroll(function(){

       console.log("parell.winHT==" , parell.winHT);
       console.log("$(window).scrollTop()==", $(window).scrollTop());


    $(".go_benefit").on("click", function(e){
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: (parell.winHT) + 'px'
      }, '500');
    });
    $(".go_about").on("click", function(e){
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: (parell.winHT)*2 + 'px'
      }, '500');
    });
    $(".go_feature").on("click", function(e){
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: (parell.winHT)*3 + 'px'
      }, '500');
    });
    $(".go_why").on("click", function(e){
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: (parell.winHT)*4 + 'px'
      }, '500');
    });
    $(".go_safety").on("click", function(e){
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: (parell.winHT)*5 + 'px'
      }, '500');
    });

    if($(window).scrollTop() > (parell.winHT * 1)-50){
      $("#head").addClass("on_scroll");
      $(".header_inner .bar, .header_inner .logo").addClass("off");
      // link.addClass("on_bar");
      link.css({
        "font-size":".85rem",
        "color":"#2b2b2b"
      })
    }else{
      $("#head").removeClass("on_scroll");
      $(".header_inner .bar, .header_inner .logo").removeClass("off");
      // link.removeClass("on_bar");
      link.css({
        "font-size":"1rem",
        "color":"#fff"
      })
    }


    });


})
