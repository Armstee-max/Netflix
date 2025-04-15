$(document).ready(function () {
  $(".movie-carousel").owlCarousel({
    items: 6,
    loop: true, // Infinite loop sliding
    margin: 10, // Space between items
    nav: true, // Show next/prev buttons
    dots: false, // Show navigation dots
    autoplay: true, // Autoplay the carousel
    autoplayTimeout: 5000, // Autoplay interval in ms
    autoplayHoverPause: true, // Pause autoplay on hover
    responsive: {
      0: {
        items: 2, // 1 item on mobile
      },
      600: {
        items: 3, // 2 items on tablet
      },
      768: {
        items: 4,
      },
      992: {
        items: 5, // 4 items on desktop
      },
      1200: {
        items: 6, // 5 items on desktop
      },
      1600: {
        items: 7,
      },
    },
  });
});

$(document).ready(function () {
  $(".customer-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    autoplay: true,
    dots: false,
    nav: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // 1 item on mobile
      },
      600: {
        items: 1, // 2 items on tablet
      },
      768: {
        items: 2,
      },
      992: {
        items: 2, // 4 items on desktop
      },
      1200: {
        items: 3, // 5 items on desktop
      },
      1600: {
        items: 3,
      },
    },
  });

  
  $("#bars-click").click(function () {
    $(".mobile-header").toggleClass("slide-in");
  });

  $("#bars-close").click(function(){
    $(".mobile-header").removeClass("slide-in")
  })

  // $(".mobile-header").click(function () {
  //   $(this).removeClass("slide-in");
  // });
  
  $(".mobile-header-box").click(function (e) {
    e.stopPropagation();
  });
});
