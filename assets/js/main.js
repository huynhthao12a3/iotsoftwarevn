// ===== Loading website
const preLoading = document.getElementById('loading');
setTimeout(loadingFunc, 500);
function loadingFunc() {
   preLoading.style.display = 'none';
}

// ===== Carousel
var myCarousel = document.querySelector('#carouselExample')
var carousel = new bootstrap.Carousel(myCarousel, {
   interval: 2500,
})

// ===== Aos Library
AOS.init({
   once: false,
   duration: 1200,
   anchorPlacement: 'top-bottom',
});

// =====
document.getElementById("nav-icon").addEventListener("click",showNavbar)
var count = 0;
function showNavbar(){
   let navbar = document.getElementById("navbar");
   let navbarOpen = document.getElementById("navbar-icon--open");
   let navbarClose = document.getElementById("navbar-icon--close");
   if(count %2 === 0){
      navbar.style.animation = "navbarIsOpen 0.3s ease-in-out";
      displayBlock();
      navbarOpen.classList.add("d-none");
      navbarClose.classList.add("d-block");

   }
   else {
      navbar.style.animation = "navbarIsClose 0.3s ease-in-out";
      setTimeout(displayBlock,250) ;
      navbarClose.classList.remove("d-block");
      navbarOpen.classList.remove("d-none");
   }
   count++;
}
function displayBlock(){
   navbar.classList.toggle('d-block');
}

// ===== tsparticles
tsParticles.load("tsparticles", {
   particles: {
      links: {
      enable: true,
      opacity: 0.5
   },
   move: {
      enable: true
   },
   opacity: {
      value: 0.8
   },
   size: {
      value: 3
   }
   }
});

// ===== Swiper
const projectSwiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   preloadImages: false,
   lazy: true,
   loop: true,
   speed: 500,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false

   },
   grabCursor: false,

   slidesPerView: 'auto',
   breakpoints: {
      100:{
            slidesPerView: 1,
            spaceBetween: 10,
      },
      768: {
            slidesPerView: 2,
            spaceBetween: 20,
      },
      992:{
            slidesPerView: 3,
            spaceBetween:20,
      }
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

});

// ===== Slick
$(document).ready(function(){

   $('.slick-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         },
         
      ]
   })
})