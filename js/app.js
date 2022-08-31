

/********************* Menu Js **********************/

function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

window.addEventListener('scroll', (ev) => {
  ev.preventDefault();
  windowScroll();
})


  //   // side sticky nav
  //   $(".sidesticky a").click(function(){
  //     // Remove active if this does not have active class
  //     if(!($(this).closest("a").hasClass("active"))){
  //         $(this).closest(".sidesticky").find("a.active").removeClass('active');
  //     }
  //     $(this).closest("a").addClass('active');
  // });


// swiper slider

new Swiper('.swiper-container', {
  
    loop: true,
    slidesPerView: 3,
    autoplay: 2500,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 20,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 2000,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });






