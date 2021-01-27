$(function(){



  var parell = { }
    parell.winHT = $(window).height();
    parell.distance = parell.winHT;
    parell.count = 0;
    parell.mnoving = false;
    parell.length = $(document).find(".page").length;

  var link = $("header .menu > li > a");
  var col2 = $(".four .cont_inner .content.con .layer.col2");
  var col3 = $(".four .cont_inner .content.con .layer.col3");
  var col4 = $(".four .cont_inner .content.con .layer.col4");
  var menu_bar = $("header .menu > li:after");


  setTimeout(function(){
    $(".copy").css({
      "visibility":"visible",
      "opacity":1
    });
  },1000);


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
        "color":"#000"
      });
    }else{
      $("#head").removeClass("on_scroll");
      $(".header_inner .bar, .header_inner .logo").removeClass("off");
      // link.removeClass("on_bar");
      link.css({
        "font-size":"1rem",
        "color":"#fff"
      })
    }

    if($(window).scrollTop() > (parell.winHT * 2)+500){
      col2.css({
        "left":"25%",
        "visibility":"visible",
        "opacity":1
      });
      // col3.css({
      //   "left":"50%",
      //   "visibility":"visible",
      //   "opacity":1
      //
      // });
      setTimeout(function(){
        col3.css({
          "left":"50%",
          "visibility":"visible",
          "opacity":1
        });
      },1000);
      setTimeout(function(){
        col4.css({
          "left":"75%",
          "visibility":"visible",
          "opacity":1
        });
      },2000);

    }else{

    }


    });

    $(".page").each(function (index, element) {

    $(element).on("mousewheel DOMMouseScroll", function (e) {
      //console.log($(this).html());

      // console.log("e ====", e);
      // console.log("originalEvent ====", e.originalEvent);

      e.preventDefault();

      var El = e.originalEvent;

      var delta = 0;


      if (El.wheelDelta) {
        delta = event.wheelDelta / 120;
        //if (window.opera) delta = -delta;
      } else if (El.detail) delta = -El.detail / 3;


      if(parell.mnoving == false) {
        parell.mnoving = true;

        // 마우스휠을 위에서 아래로
        if (delta  < 0 ) {
          if($(window).scrollTop() == parell.distance * (parell.length-1)) {
            moveTop = $(this).offset().top;
          } else {
            moveTop = $(this).next().offset().top;
          }
        // 마우스휠을 아래에서 위로
        } else {
          if($(window).scrollTop() < parell.distance) {
             moveTop = $(this).offset().top;
          } else {
            moveTop = $(this).prev().offset().top;
          }
        }


        $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
        }, {
          duration: 800, complete: function () {
            parell.mnoving = false;
          }
        });
      }

    });
  });



})
