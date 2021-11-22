const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 1;
  const slider = document.querySelector('.slideshow-container');

  images.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('mySlides', 'fade');

    const img = document.createElement('img');
    img.src = `./assets/${item}`;

    div.appendChild(img);
    slider.appendChild(div);
  });
  function showSlides(n) {
    const slides = document.querySelectorAll('.mySlides');

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  document.querySelector('.prev').addEventListener('click', () => {
    showSlides(slideIndex -= 1);
  });

  document.querySelector('.next').addEventListener('click', () => {
    showSlides(slideIndex += 1);
  });
});
