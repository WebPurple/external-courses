const imgUrlArr = [
    './asset/EPAM_office.jpg',
    './asset/logo.png',
    './asset/epam-global.jpg'
];

const copyImgUrlArr = [...imgUrlArr];

window.onload = () => {
    const sliderImage = document.querySelector('.slider-image');
    sliderImage.style.backgroundImage = `url(${copyImgUrlArr[0]}`;

    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', () => {
        copyImgUrlArr.unshift(copyImgUrlArr.pop());
        sliderImage.style.backgroundImage = `url(${copyImgUrlArr[0]})`;
    }, false);

    arrowRight.addEventListener('click', () => {
        copyImgUrlArr.push(copyImgUrlArr.shift());
        sliderImage.style.backgroundImage = `url(${copyImgUrlArr[0]})`;
    }, false);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            document.activeElement.click();
        }
    }, false);
};
