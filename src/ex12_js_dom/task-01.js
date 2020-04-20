const pictures = [
    "asset/butterfly.jpg",
    "asset/cat.jpeg",
    "asset/dog.jpg",
    "asset/fox.jpg",
    "asset/lion.jpg",
    "asset/parrots.png",
    "asset/sheep.jpg"
]

let btn_prev = document.querySelector('.prev'),
    btn_next = document.querySelector('.next'),
    slide = document.querySelector("img"),
    i = 0;

onload = slide.setAttribute("src", pictures[i]);

btn_prev.onclick = function () {
    if (i === 0) {
        i = pictures.length - 1;
    } else {
        i--
    }
    slide.setAttribute("class", "changeSlide");
    setTimeout(() => {
        slide.setAttribute("src", pictures[i]);
    }, 100);
    setTimeout(() => {
        slide.removeAttribute("class", "changeSlide");
    }, 200);
};

btn_next.onclick = function () {
    i++;
    if (i === pictures.length) {
        i = 0;
    };
    slide.setAttribute("class", "changeSlide");
    setTimeout(() => {
        slide.setAttribute("src", pictures[i]);
    }, 100);
    setTimeout(() => {
        slide.removeAttribute("class", "changeSlide");
    }, 200);
};