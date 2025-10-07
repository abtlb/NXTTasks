languageBtn = document.querySelector('#languageBtn');
languageDropdown = document.querySelector('#languageDropdown');
countryBtn = document.querySelector('#countryBtn');
countryDropdown = document.querySelector('#countryDropdown');
main = document.querySelector('main');
brand = document.querySelector('.brand');
welcome = document.querySelector('.welcome');
nav = document.querySelector('nav');
		

languageBtn.addEventListener('click', function() {
    languageDropdown.classList.toggle('show');
    countryDropdown.classList.remove('show');
})

countryBtn.addEventListener('click', function() {
    countryDropdown.classList.toggle('show');
    languageDropdown.classList.remove('show');
})

catButt = document.querySelector('#catButt');
categoriesDropdown = document.querySelector('#categoriesDropdown');

catButt.addEventListener('click', function() {
    main.classList.toggle('shadowed');
    categoriesDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!catButt.contains(event.target) && !categoriesDropdown.contains(event.target)) {
        categoriesDropdown.classList.remove('show');
        main.classList.remove('shadowed');
    }
});

window.addEventListener('scroll', function() {
    if (window.scrollY >= window.innerHeight * 0.1) {
        brand.classList.add('hide');
        welcome.classList.add('hide');
        nav.classList.add('stick');
    }
    else {
        brand.classList.remove('hide');
        welcome.classList.remove('hide');
        nav.classList.remove('stick');
    }
});


$(document).ready(function(){
  $('.brands').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  margin: '200px',
});
});

$(document).ready(function(){
  $('.blogs-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  margin: '200px',
});
});
		

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Popular Products Carousel
    new ProductCarousel('popularProductsCarousel');
    
});
