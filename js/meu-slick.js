$(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1104,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
});


$(function(){
  $('.banner-carroussel').slick({
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: true,
    autoplay: false,
    autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1104,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
});
