
const items = document.querySelector('.slider__items').children;
const widthSlides = items.length;
const nextItem = document.querySelector('.nextArrow');
const prevItem = document.querySelector('.prevArrow');
let index = 0;

nextItem.addEventListener('click', function () {
     changeImg('next');
}); 

prevItem.addEventListener('click', function () {
     changeImg('prev');
});

function changeImg(clickBtn) {
     if (clickBtn === 'next') {
          index++;

          if (index === widthSlides) {
               index = 0;
          }
     } 

     if (clickBtn === 'prev') {
          if (index === 0) {
               index = widthSlides-1;
          }

          if (index !== 0) {
               index--;
          }
     }

     for( let i=0; i<items.length; i++){
          items[i].classList.remove('active');
     }

     items[index].classList.add('active');     
}
