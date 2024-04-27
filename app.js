const prevButton = document.querySelector('.previus');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slids');



let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

const prevButtonn = document.querySelector('.previuss');
const nextButtonn = document.querySelector('.nexts');
const slidess = document.querySelectorAll('.slidss');
const testimonials = document.querySelector('.testimonial')

function showSlidee(index) {
  slidess.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add('activee');
    } else {
      slide.classList.remove('activee');
    }
  });
}

let currentSlidee = 0;

prevButtonn.addEventListener('click', () => {
  currentSlidee = (currentSlidee === 0) ? slidess.length - 1 : currentSlidee - 1;
  testimonials.innerHTML="Testimonials "+ (currentSlidee + 1);
  showSlidee(currentSlidee);
});

nextButtonn.addEventListener('click', () => {
  currentSlidee = (currentSlidee === slidess.length - 1) ? 0 : currentSlidee + 1;
  testimonials.innerHTML="Testimonials "+ (currentSlidee + 1);
  showSlidee(currentSlidee);
});
testimonials.innerHTML="Testimonials 1"

const wrapper = document.querySelector('.swiper-wraper'); // Corrected class name
const prevBtn = document.querySelector('.previus-btn');
const nextBtn = document.querySelector('.next-btn');
const images = document.querySelectorAll('.swiper-image');

let currentImageIndex = 0;

prevBtn.addEventListener('click', () => {
  currentImageIndex = Math.max(currentImageIndex - 1, 0);
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = Math.min(currentImageIndex + 1, images.length - 1);
  updateSlidePosition();
});

function updateSlidePosition() {
  const imageWidth = images[0].offsetWidth + 30; 
  const newPosition = -currentImageIndex * imageWidth;
  wrapper.style.transform = `translateX(${newPosition}px)`;
}


const menu = document.querySelector('.menu')
const ul = document.querySelector('.ul')

menu.addEventListener('click', function(){
  ul.classList.toggle('menuItem')
})


