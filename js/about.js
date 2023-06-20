
// loading screen
$(document).ready(function(){
    $("#loading").fadeOut(400,function(){
        $("body").css("overflow-y","auto")
    });
})

// slick slider plugin
$(document).ready(function(){
  $('.slider-imgs').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-content',
  });
})

// media query
  let trueOrFalse =true;
  if($(window).width()<796){
    trueOrFalse =false;
}
else{
trueOrFalse =true;
}

  $('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-imgs',
    centerMode: false,
    focusOnSelect: true,
    autoplay:true,
    prevArrow:`<a class="slider-prev"><i class="fa-solid fa-arrow-left"></i></a>`,
    nextArrow:`<a class="slider-next"><i class="fa-solid fa-arrow-right"></i></a>`,
    arrows:trueOrFalse,
  });


  //magnefic popup
    $('.gallary').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
              enabled:true,
              tPrev: 'Previous (Left arrow key)',
              tNext: 'Next (Right arrow key)', 
            },   
        });

// gallery links
$(".project-link").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  let filter=$(this).attr("data-filter");
if(filter=='All'){
    $(".image").show(400);
}
else{
    $(".image").not(`.${filter}`).hide(400);
    $(".image").filter(`.${filter}`).show(400);
}
});

// owl plugin

  $(".owl-carousel").owlCarousel({
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      loop:true,
      items:1,
      margin:10,
      autoplayHoverPause:true,
      
  })



