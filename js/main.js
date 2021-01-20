let header = document.querySelector('.header');
let hamburgermenu = document.querySelector('.hamburger-menu');

hamburgermenu.addEventListener('click',function(){
    header.classList.toggle('menu-open');
});

/* Scrollbar Section Start */
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 20);
});

/* Text Animation */
var typed = new Typed('.type', {
    strings: ['LN Soft is a new trend','We are here to help your business','our Team will grow your company in globally'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

/* Owl Carousel */
$('.owl-carousel').owlCarousel({
    autoplay:true,
    dots:true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

/* Slick Carousel */
$('.responsive').slick({
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  });


/*ScrollUp*/
const scrollUp = document.querySelector(".scrollUp");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        scrollUp.classList.add("activeScrollUp");
    }else{
        scrollUp.classList.remove("activeScrollUp");
    }
});

