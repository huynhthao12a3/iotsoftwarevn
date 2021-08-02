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
