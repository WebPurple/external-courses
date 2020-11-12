const content = [
  'assets/1.jpg',
  'assets/2.jpg',
  'assets/3.jpg',
  'assets/4.jpg',
  'assets/5.jpg',
  'assets/6.jpg',
  'assets/7.jpg',
  'assets/8.jpg',
  'assets/9.jpg',
];    
const lastContentIndex = content.length - 1;
let currentSlide = 0;
const buttonNext = document.getElementById('buttonNext');
const buttonPrev = document.getElementById('buttonPrev');
const getSlides = () => {
  const leftSlide = document.querySelector('.slide.slide_left');
  const rightSlide = document.querySelector('.slide.slide_right');
  const centralSlide = document.querySelector('.slide.slide_central');

  return {
    leftSlide,
    rightSlide,
    centralSlide,
  };
};
const { leftSlide, rightSlide, centralSlide } = getSlides();

centralSlide.style.backgroundImage = "url(" + content[0] + ")";
rightSlide.style.backgroundImage = "url(" + content[1] + ")";
leftSlide.style.backgroundImage = "url(" + content[content.length - 1] + ")";

const shiftToLeft = () => {
  const { leftSlide, rightSlide, centralSlide } = getSlides();

  currentSlide = currentSlide >= lastContentIndex ? 0 : currentSlide + 1;
  leftSlide.classList.remove('slide_left', 'slide_to-right');
  rightSlide.classList.remove('slide_right', 'slide_to-right');
  centralSlide.classList.remove('slide_central', 'slide_to-right');
  leftSlide.classList.add('slide_right', 'slide_to-left');
  rightSlide.classList.add('slide_central', 'slide_to-left');
  centralSlide.classList.add('slide_left', 'slide_to-left');
  rightSlide.style.backgroundImage = "url(" + content[currentSlide] + ")";
};

const shiftToRight = () => {
  const { leftSlide, rightSlide, centralSlide } = getSlides();

  currentSlide = currentSlide <= 0 ? lastContentIndex : currentSlide - 1;
  leftSlide.classList.remove('slide_left', 'slide_to-left');
  rightSlide.classList.remove('slide_right', 'slide_to-left');
  centralSlide.classList.remove('slide_central', 'slide_to-left');
  leftSlide.classList.add('slide_central', 'slide_to-right');
  rightSlide.classList.add('slide_left', 'slide_to-right');
  centralSlide.classList.add('slide_right', 'slide_to-right');      
  leftSlide.style.backgroundImage = "url(" + content[currentSlide] + ")";
};

buttonPrev.addEventListener('click', shiftToRight);
buttonNext.addEventListener('click', shiftToLeft);
