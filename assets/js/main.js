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